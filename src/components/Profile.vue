<template>
  <b class="text-6xl">Protfolio</b>
  <div class="grid grid-cols-2 gap-10 mt-10" v-for="pr in profile" :key="pr.id">
    <div class="text-center">
      <img class="mx-auto" :src="pr.img" alt="img" />
      <br />
      <b class="text-3xl">{{ pr.fullname }}</b>
    </div>
    <div>
      <b class="text-5xl">EDUCATION</b>
      <br />
      <div v-for="edu in pr.education" :key="edu.id">
        <p>{{ edu.years }}</p>
        <p>{{ edu.class }}</p>
        <p>{{ edu.school }}</p>
      </div>
    </div>
    <div>
      <b class="text-5xl">ABOUT ME</b>
      <p>
        {{ pr.aboutbe }}
      </p>
    </div>
    <div>
      <b class="text-5xl">SKILL</b>
      <div class="grid grid-cols-2 gap-10">
        <div>
          <b>Computer Language</b>
          <ul
            class="list-disc list-inside"
            v-for="com in pr.computer"
            :key="com.id"
          >
            <li>{{ com.language }}</li>
          </ul>
        </div>
        <div>
          <b>Software Program</b>
          <ul
            class="list-disc list-inside"
            v-for="sof in pr.software"
            :key="sof.id"
          >
            <li>{{ sof.program }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <b class="text-5xl">CAREER OVERVIEW</b>
      <p>
        {{ pr.overview }}
      </p>
    </div>
    <div>
      <b class="text-5xl">CONTACT INFORMATION</b>
      <div v-for="con in pr.contract" :key="con.id">
        <p><b>Address :</b> {{ con.address }}</p>
        <p><b>Tel :</b> {{ con.tel }}</p>
        <p><b>Gmail :</b> {{ con.gmail }}</p>
      </div>
      <br />
       <router-link
          :to="{
            name: 'contract'
          }"
        >
        <button
        class="
          border-4 border-indigo-300
          hover:border-gray-500
          rounded-full
          py-3
          px-6
        "
      >
        Contract Other
      </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    profile: [
      {
        id: 1,
        fullname: "KITTIKARN JANBANG",
        img: "https://reg.buu.ac.th/registrar/getstudentimage.asp?id=61160197",
        education: [
          {
            id: 1,
            years: "2018 – present",
            class:
              "B.Sc. (Information Tehnology) – in progress Faculty of Informatics",
            school: "Burapha University Long Had Bangsaen RoadChonBuri 20130",
          },
          {
            id: 2,
            years: "2012 – 2017",
            class: "High School Certificate",
            school:
              "Assumption Samutprakarn School Thepharak, Samutprakarn 10540",
          },
        ],
        aboutbe: `Experience in making projects, used to make web applications about the system.
        Recommended attractions and movie recommendation systems, and can do cloud servers such as AWS Cloud Server and Huawei Cloud Server
          .Programmer language that can be written. html,php,css,javascript`,
        computer: [
          { id: 1, language: "HTML" },
          { id: 2, language: "CSS" },
          { id: 3, language: "JAVASCRIPT" },
          { id: 4, language: "JAVA" },
          { id: 5, language: "PHP" },
          { id: 6, language: "VUEJS" },
        ],
        software: [
          { id: 1, program: "Visual studio code" },
          { id: 2, program: "Oracel" },
          { id: 3, program: "MySQL Workbench 8.0 CE" },
          { id: 4, program: "Power Bi desktop" },
        ],
        overview: `In 1 semester, I will use 4 years of competence to learn programming. Will be able to make the quality of the work that comes out to be more developed`,
        contract: [
          {
            id: 1,
            address: `111/64 The plan village Srinakarin, Moo 8, Bangkeaw, Bangpee,Samutprakan, 10540`,
            tel: "0889188422",
            gmail: "61160197@gmail.com"
          },
        ],
      },
    ],
  }),
};
</script>

<style></style>
