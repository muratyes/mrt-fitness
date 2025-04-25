
# mrt-fitness

+ The mrt-fitness project is an application developed for fitness and exercise tracking. It allows users to plan, track and record their workouts.
* Ein Webprojekt mit: Node.js, Express.js, MondoDB, REST API auf dem Backend, React, React Bootstrap, Material UI auf dem Frontend,
* Im Projekt wurde die Benutzeroberfläche eines Fitnesscenters gestaltet. Es besteht aus §-Abschnitten. Fitness, Yoga und Ernährung.
* Diese Abschnitte dienen dazu, die Kommunikation mit dem Benutzer aufrechtzuerhalten. Auf einer Seite werden Informationen zu Fitness-Workouts und Trainingsempfehlungen bereitgestellt. 
* Auf der Yoga-Seite wurde eine Schnittstelle eingerichtet, über die Benutzer Unterrichtstermine vereinbaren können. 
* Auf der Seite Ernährung werden gesunde Ernährung, Diätempfehlungen und notwendige Ernährungsoptionen durch die Messung des Body-Mass-Index und des Taillenumfangs angeboten.

## Features

* **Workout Planning:** Users can create their own workout routines, select exercises and determine the number of sets/reps.

* **Workout Tracking:** The application allows you to record the exercises performed, the weights used and the number of reps.

* **Progress Tracking:** Users can visually track their progress over time through graphs and statistics.

* **Nutrition Tracking (Future Feature):** A feature is planned that will allow users to track their food and calorie intake.

* **Personalized Recommendations (Future Feature):** It is aimed to provide personalized workout and nutrition recommendations according to the user's goals and progress.

## Installation

1. Clone this GitHub repository:

```bash
git clone [https://github.com/muratyes/mrt-fitness.git](https://github.com/muratyes/mrt-fitness.git)
```
2. Go to the project directory:

```bash
cd mrt-fitness
```
3. Install the necessary dependencies. Use one of the following commands, depending on the package manager the project uses:

**If you are using npm:**

```bash
npm install
```

**If you are using yarn:**

```bash
yarn install
```
4. Install the database (if a database is used). Enter the database connection information in the configuration file (for example, `.env` or `config.js`).

5. Start the application. Use one of the following commands depending on the run command used by the project:

**If you are using npm:**

```bash
npm start
```

or

```bash
npm run dev
```

**If you are using yarn:**

```bash
yarn start
```

or

```bash
yarn dev
```

## Usage

Once the application is launched, it will usually be accessible from `http://localhost:3000` in a web browser. The user interface allows you to plan your workouts, track your exercises, and view your progress.

## Contribute

If you would like to contribute to the project, please follow these steps:

1. Fork this GitHub repository.
2. Create your own branch (`git checkout -b my-new-feature`).
3. Make your changes and commit (`git commit -am 'New feature added'`).

4. Push to your branch (`git push origin my-new-feature`).

5. Create a pull request.

## License

This project is licensed under the MIT License. For more information, see the [LICENSE](LICENSE) file.
