const persons = [
  {
    name: "Nish",
    photo:
      "https://uploads-ssl.webflow.com/63f8afb7a279459200022c42/65ff522c179511a669fef99f_Nish_1.jpg",
    title: "Founder and Creative Director",
    bio:
      "<p>With 30 years in design and marketing, Nish has cultivated expertise leading UK’s top agencies and established Curious Agency 12 years ago to present a unique, agile, and informed service without the administrative hassle. Nish's experience as a creative leader embedded in advocacy groups enables him to bring distinctive insights into diversity, ESG, and sustainability programmes to all clients. He has a multifaceted approach across B2B and B2C campaigns, with a focus on Diversity and ESG, allows for crafting impactful, result-driven campaigns. Proudly serving as an Advisory Member at Brand Leadership Community, Nish continues to shape discussions around Marketing, D&I, and Content.</p>",
    social: {
      facebook: "#",
      twitter: "https://twitter.com/knyttneve",
      linkedin: "#"
    }
  },
  {
    name: "Shawn",
    photo:
      "https://uploads-ssl.webflow.com/63f8afb7a279459200022c42/65ff522cea0d1eeda904871c_Shawn_1.jpg",
    title: "Senior Creative",
    bio:
      "<p>A seasoned professional with over 15 years of experience. His expertise spans a wide range of B2B and B2C campaigns for large companies, specialising in branding and digital strategies. Shawn is known for his innovative approach to problem-solving, consistently delivering effective solutions. Often referred to as a 'Swiss-army designer' due to his versatile skills. A music and Sunday Dinner enthusiast and self-proclaimed semi-pro high fiver. You'll find Shawn either in the gym or immersed watching ghost videos on YouTube.</p>",
    social: {
      facebook: "#",
      twitter: "https://twitter.com/knyttneve",
      linkedin: "#"
    }
  },
  {
    name: "Deap",
    photo:
      "https://uploads-ssl.webflow.com/63f8afb7a279459200022c42/65ff522b186adb55cc5e2fd3_Deap_1.jpg",
    title: "ESG and Sustainability Strategist",
    bio:
      "<p>Deap is a skilled ESG & Sustainability Strategist with 15 years of experience in guiding diverse companies through sustainability transformations. Expert in integrating ESG priorities into business strategies, operations, and culture, Deap excels in strategic planning, problem-solving, workshop facilitation, B Corp certification, and change management. With a history of directing sustainability teams in retail and advising global corporates through firms like The Brunswick Group and Grant Thornton, Deap offers comprehensive insights into crafting and implementing impactful ESG strategies for enhanced business resilience, reputation, consumer experience, and value creation.</p>",
    social: {
      facebook: "#",
      twitter: "https://twitter.com/knyttneve",
      linkedin: "#"
    }
  },
  {
    name: "Anna ",
    photo:
      "https://uploads-ssl.webflow.com/63f8afb7a279459200022c42/65ff522b4060c78c493f1fd9_Anna_1.jpg",
    title: "Digital Marketing & Strategy",
    bio:
      "<p>Having worked over 10 years in digital marketing both agency and client-side, Anna has gained a plethora of knowledge in multiple disciplines such as SEO, PPC, Social Media and Content Marketing. She has built and actioned effective strategies for clients in multiple sectors including retail, construction, insurance, finance, aviation and travel. She specialises in integrated digital marketing which provides a cohesive and seamless customer experience across digital channels.</p>",
    social: {
      facebook: "#",
      twitter: "https://twitter.com/knyttneve",
      linkedin: "#"
    }
  }
  
];

const app = new Vue({
  el: "#app",
  data() {
    return {
      persons: persons,
      selectedPersonIndex: null,
      isSelected: false,
      selectedPerson: null,
      inlineStyles: null,
      isReady: false,
      isOk: false,
      selectedPersonData: {
        name: null,
        title: null,
        photo: null,
        social: {
          facebook: null,
          twitter: null,
          linkedin: null
        }
      }
    };
  },
  methods: {
    selectPerson(index, el) {
      if (!this.isOk) {
        this.selectedPersonIndex = index;
        this.isSelected = true;
        el.target.parentElement.className == "person-details"
          ? (this.selectedPerson = el.target.parentElement.parentElement)
          : (this.selectedPerson = el.target.parentElement);

        this.selectedPerson.classList.add("person-selected");
        this.selectedPerson.setAttribute(
          "style",
          `width:${this.selectedPerson.offsetWidth}px;`
        );
        this.selectedPersonData = this.persons[index];
        window.setTimeout(() => {
          this.inlineStyles = `width:${this.selectedPerson.offsetWidth}px;height:${this.selectedPerson.offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this.selectedPerson.offsetTop}px;position:fixed`;
          this.selectedPerson.setAttribute("style", this.inlineStyles);
        }, 400);
        window.setTimeout(() => {
          this.isReady = true;
          this.isOk = true;
        }, 420);
      } else {
        this.reset();
      }
    },
    reset() {
      this.isReady = false;
      window.setTimeout(() => {
        this.selectedPerson.classList.add("person-back");
      }, 280);
      window.setTimeout(() => {
        this.selectedPerson.setAttribute("style", "");
      }, 340);
      window.setTimeout(() => {
        this.isSelected = false;
        this.selectedPerson.classList.remove("person-back", "person-selected");
        this.isOk = false;
      }, 400);
    }
  }
});
