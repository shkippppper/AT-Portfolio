<template lang="pug">
.about-layout
    h1 About
    p Hello! I'm a passionate developer with a diverse background in software development, engineering, and management. At 25 years old, I bring three years of development experience to the table, with a focus on front-end technologies for the past two years.
    .download-cv
        span To see my resume click on the&nbsp;
        a.download-link(href="/files/Akaki_Titberidze_CV_2024_ENG.pdf" target="_blank") Link
            img(alt="Vue logo" src="../assets/cv_logo.webp")

        //.download-text Akaki_Titberidze_CV_2024_ENG.pdf
    h2 My Journey
    p My journey into the world of development began in an unexpected field—video game creation. While studying for my Bachelor's in Electrical and Computer Engineering, I discovered&nbsp;
        a(href="https://unity.com/" target="_blank") Unity
        |&nbsp;and&nbsp;
        a(href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank") C#
        |. This platform ignited my passion for building engaging digital experiences, a passion that continues to drive my career.
    p Before completing my degree, I gained practical experience in the industrial sector. I started as a 3D model drawer with Autodesk's&nbsp;
        a(href="https://www.autodesk.com/products/inventor/" target="_blank") Inventor
        |&nbsp;and&nbsp;
        a(href="https://www.autodesk.com/products/autocad/" target="_blank") Autocad&nbsp;
        |&nbsp;at a sheet metal manufacturing company, where I was quickly promoted to Chief Constructor, overseeing HVAC system designs and various industrial projects. My knack for leadership and problem-solving led to another promotion, this time to Chief Engineer of the factory. In this role, I managed large-scale industrial projects, honing my skills in project management and operational logistics.
    p Despite my success in engineering, I felt the pull back to programming. I revisited my roots in&nbsp;
        a(href="https://cplusplus.com/" target="_blank") C++
        |&nbsp;and transitioned to&nbsp;
        a(href="https://unity.com/" target="_blank") Unity
        |&nbsp;and&nbsp;
        a(href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank") C#
        |&nbsp;where I refined my understanding of programming concepts by developing several video games.
    h2 Transition to Web Development
    p Eager to explore new technologies, I delved into web development, quickly mastering&nbsp;
        a(href="https://vuejs.org/" target="_blank") Vue.js
        |,&nbsp;
        a(href="https://pugjs.org/api/getting-started.html" target="_blank") PUG
        |, and&nbsp;
        a(href="https://sass-lang.com/" target="_blank") SCSS
        |. Within four months, I began my career as a Web Developer, where I am currently involved in building and maintaining a comprehensive contract chair selling company website. This role includes developing its CMS and enhancing user-side functionalities, showcasing my ability to handle both the technical and user experience aspects of web development.
    h2 Expanding Horizons
    p Recently, I began expanding my skill set to include&nbsp;
        a(href="https://developer.apple.com/develop/" target="_blank") iOS development
        |, undertaking a course with&nbsp;
        a(href="https://www.tbcacademy.ge/" target="_blank") TBC Academy
        |&nbsp;to deepen my understanding of mobile platforms and participating in hands-on projects that challenge me to apply my skills in new ways.
    h2 Looking Forward
    p As I continue to grow and learn, I am eager to take on new challenges and build solutions that combine aesthetic appeal with functional innovation. I am always on the lookout for opportunities to bring my unique perspective to projects that inspire and innovate.


</template>

<script>
export default {
    name: 'AboutLayout',
    methods: {
        downloadFile() {
            const link = document.createElement('a');
            link.href = '/files/Akaki_Titberidze_CV_2024_ENG.pdf';
            link.download = 'Akaki_Titberidze_CV_2024_ENG.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}


</script>

<style scoped lang="scss">
.about-layout{
    display: block;
    color: var(--text-color);

    h1{
        margin: 0 auto 40px;
        max-width: 800px;
        font-size: 46px;
        font-weight: 500;
        line-height: 1.2;
        letter-spacing: -.02em;
    }

    h2{
        margin: 40px auto 20px;
        max-width: 800px;
        font-size: 30px;
        font-weight: 500;
        line-height: 1.2;
        letter-spacing: -.02em;
    }

    p{
        margin: 20px auto;
        max-width: 800px;
        font-size: 20px;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: -.02em;
    }

    a{
        all: unset;
        cursor: pointer;
        text-decoration: underline var(--primary-color);
        font-weight: 500;

        &:hover{
            color: var(--primary-color);
            text-decoration: unset;
        }
    }

    .download-cv{
        all: unset;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 20px auto;
        max-width: 800px;

        img{
            width: 50px;
            height: 50px;
            padding: 5px;
        }

        span{
            all: unset;
            font-style: italic;
            max-width: 800px;
            font-size: 20px;
            font-weight: 400;
            line-height: 1.5;
            letter-spacing: -0.02em;
        }

        .download-text{
            border-top: 1px solid var();
            font-size: 20px;
            font-weight: 400;
            line-height: 1.5;
            letter-spacing: -0.02em;
        }

        .download-link{
            font-style: italic;
            cursor: pointer;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}

</style>

