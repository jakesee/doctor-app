import { IDatabase, IUser, UserRole, IAppointment, AppointmentStatus, IProvider, IEpisode, IChatMessage, EpisodeStatus } from "../interfaces";
import { Database } from "../Database";

const RANDOM = {
    firstNames: ["Sarah", "Johnnie", "Wm", "Megan", "Lynn", "Andre", "Celia", "Delia", "Geoffrey", "Dora", "Fannie", "Colin", "Marlene", "Tammy", "Grady", "Lola", "Bonnie", "Luke", "Marta", "Russell", "Felix", "Kyle", "Ricardo", "Lois", "Vanessa", "Caleb", "Woodrow", "Joe", "Joel", "Christie", "Kevin", "April", "Ada", "Don", "Darnell", "Dixie", "Moses", "Guadalupe", "Marlon", "Bradley", "Blanca", "Esther", "Gail", "Laurie", "Amos", "Mitchell", "Joann", "Marsha", "Preston", "Jean", "Nick", "Antonia", "Carla", "Grant", "Shelia", "Natalie", "Sonya", "Christy", "Omar", "Jody", "Traci", "Judith", "Sherman", "Leroy", "Stacey", "Elmer", "Irene", "Guy", "Kerry", "Lawrence", "Hazel", "Karla", "Dianne", "Vincent", "Domingo", "Wilfred", "Dana", "Willie", "Misty", "Leslie", "Ken", "Lela", "Kelli", "Yvonne", "Orville", "Sonia", "Harriet", "Bernadette", "Jeannie", "Ted", "Mike", "Vivian", "Brooke", "Kara", "Zachary", "Evelyn", "Carl", "Cristina", "Candace", "Jerom"],
    lastNames: ["Perez", "Mccormick", "Turner", "Goodwin", "Logan", "Gardner", "Fletcher", "Hale", "Berry", "Zimmerman", "Wilkerson", "Ortega", "Burke", "Cunningham", "Klein", "Mullins", "Campbell", "Dawson", "Herrera", "Griffin", "Valdez", "Bowers", "Leonard", "Powers", "Ramirez", "Norris", "Alexander", "Hunter", "Moody", "Baker", "Lee", "Daniels", "Gregory", "Warner", "Fowler", "Pittman", "Webb", "Floyd", "Norton", "Murray", "Sutton", "Dean", "Barber", "Harris", "Harrington", "Marshall", "Jordan", "Hicks", "Joseph", "Garza", "Lawson", "Griffith", "Bennett", "Duncan", "Pierce", "Owen", "Swanson", "Weber", "Stone", "Gonzales", "Mckinney", "Parks", "Rice", "Castro", "Johnson", "Summers", "Holland", "Conner", "Wallace", "Weaver", "Walker", "Poole", "Gonzalez", "Jacobs", "Maxwell", "Schneider", "Ortiz", "Reyes", "Brock", "Colon", "Mills", "Harrison", "Padilla", "Baldwin", "Hogan", "Flores", "Byrd", "Frazier", "Hawkins", "Howard", "Meyer", "Morris", "Reid", "Cobb", "Allen", "Copeland", "Chapman", "Francis", "Rodriquez", "Bush"],
    gender: ["Male", "Female"],
    clinicNames: ["Blessings Community Hospital", "Meadowview Clinic", "Pine Valley Medical Clinic", "Clearview Medical Clinic", "Great Plains General Hospital", "Paradise Grove Hospital", "White Wing Hospital Center", "Specialty Medical Center", "Hill Crest General Hospital", "Olympus General Hospital", "Castle Hospital Center", "Honor Clinic", "Rainbow Clinic", "Angelvale Medical Center", "Riverside General Hospital", "White Wing Clinic", "Mineral Community Hospital", "Bayview Hospital", "Beacon Medical Center", "Principal Clinic", "Rainbow Hospital Center", "Highland Medical Clinic", "Wellness Community Hospital", "Swan River General Hospital", "White Feather Medical Center", "Griffin Hospital", "Jade Forest General Hospital", "Tranquility General Hospital", "Rose Petal General Hospital", "Summer Springs General Hospital", "Spring Harbor Medical Clinic", "Grand Mountain Community Hospital", "Lakewood Clinic", "Summerstone Hospital Center", "Evergreen Hospital Center", "Grand Valley Medical Center", "White Blossom Medical Center", "Blossom Valley Hospital Center", "Hot Springs Clinic", "Grand Meadow General Hospital", "Pearl River Clinic", "Sapphire Lake Medical Clinic", "Hill Crest Hospital", "Grand River Community Hospital", "Hope Haven Hospital Center", "North Star Hospital Center", "Good Samaritan Hospital", "Evergreen General Hospital", "Wellness Community Hospital", "Grand View Community Hospital"],
    adjectives: ["tan", "vagabond", "learned", "energetic", "capable", "gorgeous", "lush", "crazy", "rotten", "laughable", "giant", "fortunate", "recondite", "natural", "billowy", "diligent", "mysterious", "industrious", "sulky", "half", "rambunctious", "rabid", "loutish", "versed", "ashamed", "feeble", "defective", "faded", "ill-fated", "mundane", "terrific", "suitable", "roomy", "regular", "painful", "mad", "abundant", "dispensable", "two", "defiant", "skinny", "anxious", "former", "wanting", "agonizing", "troubled", "tasteless", "thankful", "breezy", "federal"],
    nouns: ["description", "employment", "map", "transportation", "agreement", "diamond", "agency", "unit", "investment", "police", "church", "hair", "movie", "delivery", "paper", "protection", "football", "person", "funeral", "tennis", "debt", "fishing", "leadership", "cell", "birthday", "engine", "member", "two", "penalty", "childhood", "departure", "emotion", "manager", "establishment", "breath", "science", "freedom", "idea", "entertainment", "fortune", "pollution", "gate", "control", "death", "confusion", "library", "attention", "election", "perspective", "literature"],
    businesses: ["Mystic Entertainment", "Apache Brews", "Mercury Corporation", "Marsoftwares", "Crowares", "Rushcorp", "Smilectronics", "Heartcast", "Tigerlife", "Cliffwood", "Hook Media", "Twilight Acoustics", "Dwarf Softwares", "Fortunetworks", "Turtletainment", "Lokilutions", "Sawwares", "Wonderhive", "Spritewalk", "Banshee Aviation", "Fjord Sports", "Goblin Brews", "Deserprises", "Grizzlimited", "Globaviations", "Wizardustries", "Foresthut", "Moonmedia", "Bansheestone", "Peachworks", "Honeydew Industries", "Hercules Industries", "Revelation Entertainment", "Raptolutions", "Greenetworks", "Prodintelligence", "Odinetworks", "Cubedale", "Spiritman", "Mountainshack", "Raptor Microsystems", "Amazon Solutions", "Turtle Motors", "Pixystems", "Asco", "Pyramidustries", "Rabbitechnologies", "Alpinepoint", "Mermaidgold", "Auradew", "Cloud Security", "Hero Entertainment", "Granitelligence", "Globaviations", "Pumpkinavigation", "Hatchworks", "Lionesspoint", "Arcanestar", "Phoenixwell"],
    sentences: [
    `I'm a great listener, really good with empathy vs sympathy and all that, but I hate people.`,
        `Lightning Paradise was the local hangout joint where the group usually ended up spending the night.`,
        `You realize you're not alone as you sit in your bedroom massaging your calves after a long day of playing tug-of-war with Grandpa Joe in the hospital.`,
        `The paintbrush was angry at the color the artist chose to use.`,
        `They throw cabbage that turns your brain into emotional baggage.`,
        `His mind was blown that there was nothing in space except space itself.`,
        `Check back tomorrow; I will see if the book has arrived.`,
        `Two more days and all his problems would be solved.`,
        `The overpass went under the highway and into a secret world.`,
        `It took him a while to realize that everything he decided not to change, he was actually choosing.`,
        `He realized there had been several deaths on this road, but his concern rose when he saw the exact number.`,
        `The balloons floated away along with all my hopes and dreams.`,
        `Today I bought a raincoat and wore it on a sunny day.`,
        `She only paints with bold colors; she does not like pastels.`,
        `When he encountered maize for the first time, he thought it incredibly corny.`,
        `He was disappointed when he found the beach to be so sandy and the sun so sunny.`,
        `She looked at the masterpiece hanging in the museum but all she could think is that her five-year-old could do better.`,
        `This book is sure to liquefy your brain.`,
        `They got there early, and they got really good seats.`,
        `They say people remember important moments in their life well, yet no one even remembers their own birth.`,
        `The elderly neighborhood became enraged over the coyotes who had been blamed for the poodle’s disappearance.`,
        `Today I dressed my unicorn in preparation for the race.`,
        `The tree fell unexpectedly short.`,
        `Siri became confused when we reused to follow her directions.`,
        `People generally approve of dogs eating cat food but not cats eating dog food.`,
        `She was the type of girl who wanted to live in a pink house.`,
        `I would be delighted if the sea were full of cucumber juice.`,
        `He picked up trash in his spare time to dump in his neighbor's yard.`,
        `She finally understood that grief was her love with no place for it to go.`,
        `Pantyhose and heels are an interesting choice of attire for the beach.`,
        `There is no better feeling than staring at a wall with closed eyes.`,
        `The beauty of the African sunset disguised the danger lurking nearby.`,
        `He strives to keep the best lawn in the neighborhood.`,
        `It must be five o'clock somewhere.`,
        `Her daily goal was to improve on yesterday.`,
        `The near-death experience brought new ideas to light.`,
        `A good example of a useful vegetable is medicinal rhubarb.`,
        `Yeah, I think it's a good environment for learning English.`,
        `The estate agent quickly marked out his territory on the dance floor.`,
        `I've never seen a more beautiful brandy glass filled with wine.`,
        `If eating three-egg omelets causes weight-gain, budgie eggs are a good substitute.`,
        `There have been days when I wished to be separated from my body, but today wasn’t one of those days.`,
        `I had a friend in high school named Rick Shaw, but he was fairly useless as a mode of transport.`,
        `She discovered van life is difficult with 2 cats and a dog.`,
        `He decided to count all the sand on the beach as a hobby.`,
        `The rain pelted the windshield as the darkness engulfed us.`,
        `I checked to make sure that he was still alive.`,
        `Everyone was busy, so I went to the movie alone.`,
        `She folded her handkerchief neatly.`,
        `It was her first experience training a rainbow unicorn.`
    ],
}


export default class Generator {

    public static getSentence() {
        const index = Math.floor(Math.random() * RANDOM.sentences.length)
        return RANDOM.sentences[index];
    }

    public static populateRandomData(database: IDatabase): IDatabase {
        const providers = Database.providers;

        const countPatients = this.random(5, 8);
        const countDoctors = this.random(5, 10);
        const countEpisodes = this.random(20, 50);
        const countAppointments = this.random(20, 50);

        const patients = [], doctors = [], appointments = [], episodes = [];

        // generate patients
        for (let i = 0; i < countPatients; i++) {
            patients.push(this.randomUser());
        }

        // generate doctors
        for (let i = 0; i < countDoctors; i++) {
            var doctor = this.randomUser();
            doctor.role = UserRole.doctor;
            doctors.push(doctor);
        }

        // generate episodes
        for (let i = 0; i < countEpisodes; i++) {
            let episode = this.randomEpisode(patients, doctors, providers);
            episodes.push(episode);
        }

        // generate appointments
        const min15 = 1000 * 60 * 15;
        const hour1 = min15 * 4;
        for (let i = 0; i < countAppointments; i++) {
            let appointment = this.randomAppointment(episodes);
            var milliseconds = Date.now() + hour1 * 2 - (Math.random() * min15 * i);
            appointment.startAt = new Date(milliseconds);
            appointment.endAt = new Date(milliseconds + min15);
            appointments.push(appointment);
        }

        // fix one doctor and patient so that we can use it to login
        doctors[0].username = 'doctor';
        doctors[0].password = 'doctor';
        patients[0].username = 'patient';
        patients[0].password = 'patient';

        database.appointments.push(...appointments);
        database.users.push(...patients, ...doctors);
        database.episodes.push(...episodes);

        return database;
    }

    public static random(min:number, max:number):number { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    public static anyone<T>(items: T[]):T {
        return items[this.random(0, items.length - 1)];
    }

    public static randomUser(): IUser {

        let firstName = this.anyone(RANDOM.firstNames);
        let lastName = this.anyone(RANDOM.firstNames);
        let domain = this.anyone(RANDOM.businesses).replace(' ', '').toLowerCase();
        let gender = this.anyone(RANDOM.gender);

        let user: IUser = {
        "id": this.random(10000, 99999),
        "birthdate": this.randomDate(),
        "firstName": firstName,
        "lastName": lastName,
        "email": `${firstName}.${firstName}@${domain}`,
        "contact": this.random(80000000, 99999999).toString(),
        "gender": gender,
        "nationalId": this.random(10000000, 99999999).toString(),
        "password": this.anyone(RANDOM.adjectives),
        "username": this.anyone(RANDOM.nouns),
        "imgUrl": this.randomPortraitUrl(gender === 'Male'),
        "role": UserRole.patient
        };

        return user;
    }

    public static randomEpisode(patients: IUser[], doctors: IUser[], providers: IProvider[]) {

        const participants = [this.anyone(patients), this.anyone(doctors)];

        let episode: IEpisode = {
            "participants": participants,
            "providerId": this.anyone(providers).id,
            "id": this.random(10000, 99999),
            "messages": this.randomChatHistory(participants),
            "status": (this.random(1, 10) % 2 === 0) ? EpisodeStatus.Opened : EpisodeStatus.Closed
        }

        return episode;
    }

    public static randomChatHistory(participants: IUser[]) {

        const countMessages = this.random(3, 20);
        const startDateTime = this.randomDate(2020, 2021);
        const min15 = 1000 * 60 * 15;
        const sec10 = 1000 * 10;

        let nextDateTime = startDateTime;

        const messsages = [];
        for (let i = 0; i < countMessages; i++) {
            const message: IChatMessage = {
                "userId": this.anyone(participants).id,
                "message": Generator.getSentence(),
                "datetime": nextDateTime
            }
            nextDateTime = new Date(nextDateTime.getTime() + this.random(sec10, min15));
            messsages.push(message);
        }

        return messsages;
    }

    public static randomAppointment(episodes: IEpisode[]) {

        let appointment: IAppointment = {
            "id": this.random(10000, 99999),
            "episodeId": this.anyone(episodes).id,
            "startAt": new Date(),
            "endAt": new Date(),
            "status": AppointmentStatus.Open,
        }

        return appointment;
    }

    public static randomDate(startYear = 1959, endYear = 2002): Date {
        return new Date(
        this.random(1959, 2002),
        this.random(1, 12),
        this.random(1, 28),
        0, 0, 0, 0
        );
    }

    public static randomPortraitUrl(isMale: boolean): string {

        let id = this.random(1, 99);
        let gender = isMale ? 'men' : 'women';
        return `https://randomuser.me/api/portraits/${gender}/${id}.jpg`
    }

    public static any<T>(source: T[], count: number): T[] {
        var result:T[] = [];

        for (var i = 0; i < source.length; i++) {

        if (result.length >= count) break;

        var need = count - result.length;
            if (Math.floor(Math.random() * (source.length - i - need)) === 0) {
                result.push(source[i]);
            }
        }

        return result;
    }
}
