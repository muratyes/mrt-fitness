const jwt = require('jsonwebtoken');
const User = require('../models/user'); // User modelini import et

// Token doğrulama ve kullanıcı kontrolü
const verifyToken = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Bearer token'ı al

    if (!token) {
        return res.status(401).json({ message: 'Token erforderlich' });
    }

    try {
        // Token'ı doğrula
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Token'dan gelen e-posta ile user tablosunda kullanıcıyı ara
        const user = await User.findOne({ email: decoded.email });

        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        }

        // Kullanıcıyı request'e ekle
        req.user = user;
        next(); // Bir sonraki middleware'e geç
    } catch (error) {
        return res.status(401).json({ message: 'Geçersiz token' });
    }
};

// Token oluşturma (Kullanıcı giriş yaptıktan sonra)
const generateToken = (user) => {
    const payload = {
        email: user.email,
    };

    // Token oluştur
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
};

// Kullanıcı kaydı ve giriş işlemleri
const register = async (req, res) => {
    const { name, surname, email, password } = req.body;

    try {
        // Kullanıcı zaten var mı kontrol et
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Bu e-posta ile zaten bir hesap var.' });
        }

        // Yeni kullanıcı oluştur
        const newUser = new User({ name, surname, email, password });
        await newUser.save();

        // Kullanıcı kaydı başarılı, token oluştur
        const token = generateToken(newUser);

        res.status(201).json({
            message: 'Kullanıcı başarıyla kaydedildi.',
            token: token, // Token'ı geri gönder
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Sunucu hatası' });
    }
};

// Kullanıcı giriş işlemi
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Kullanıcıyı e-posta ile bul
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
        }

        // Şifreyi kontrol et
        const isMatch = await user.comparePassword(password); // comparePassword fonksiyonu şifre doğrulama için
        if (!isMatch) {
            return res.status(401).json({ message: 'Geçersiz şifre.' });
        }

        // Giriş başarılı, token oluştur
        const token = generateToken(user);

        res.status(200).json({
            message: 'Giriş başarılı.',
            token: token, // Token'ı geri gönder
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Sunucu hatası' });
    }
};

module.exports = {
    verifyToken,
    register,
    login,
};
