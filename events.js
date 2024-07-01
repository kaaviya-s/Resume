function createHeader(){

    const headerTag = document.createElement("header");

    const nameTag = document.createElement("h1");
    nameTag.textContent= candidates.name;
    headerTag.appendChild(nameTag);

    const navTag = document.createElement("nav");

    //First Division
    const divForMail = document.createElement("div");
    divForMail.classList.add("line1");

    const pTagForMail = document.createElement("p");
    const aForMail = document.createElement("a");
    aForMail.setAttribute("href" , `mailto:${candidates.email}`);
    aForMail.setAttribute("target" , "_blank");
    aForMail.textContent = candidates.email;
    pTagForMail.appendChild(aForMail);
    divForMail.appendChild(pTagForMail);

    //Second Division

    const divForgit = document.createElement("div");
    divForgit.classList.add("line2");

    const pTagForGit = document.createElement("p");
    //for git
    const spanForGit = document.createElement('span');

    const aForGit = document.createElement("a");
    aForGit.href = `https://${candidates.github}`;
    aForGit.target = "_blank";
    aForGit.textContent = candidates.github;
    spanForGit.appendChild(aForGit);

    pTagForGit.appendChild(spanForGit);
    divForgit.appendChild(pTagForGit);

    const character  =document.createTextNode("\u00A0 | \u00A0");
    pTagForGit.appendChild(character);
    //For linkedIn
    const spanForLinkedin = document.createElement('span');

    const aForLinked = document.createElement("a");
    aForLinked.href = `https://${candidates.linkedIn}`;
    aForLinked.target = "_blank";
    aForLinked.textContent = candidates.linkedIn;
    spanForLinkedin.appendChild(aForLinked);

    pTagForGit.appendChild(spanForLinkedin);
    const char  =document.createTextNode("\u00A0 | \u00A0");
    pTagForGit.appendChild(char);

    const mobile = document.createTextNode(candidates.contact);
    pTagForGit.appendChild(mobile);
    
    navTag.appendChild(divForMail);
    navTag.appendChild(divForgit);

    headerTag.appendChild(navTag);
    const horizon = document.createElement("hr");
    headerTag.appendChild(horizon);

    return headerTag;
}

function createPartition1(){
    const articleTag = document.createElement("article");
    articleTag.classList.add('partition1');

    //Education
    const sectionTag = document.createElement("section");
    sectionTag.classList.add("education");
    const header = document.createElement("h4");
    header.textContent = "EDUCATION";
    sectionTag.appendChild(header);

    const ulTag = document.createElement("ul");
    for ( let key in candidates.education){
        const liTag = document.createElement('li');
        liTag.textContent = candidates.education[key].degree;
        ulTag.appendChild(liTag);

        const detailsTAg = document.createElement("details");

        const summaryTag = document.createElement("summary");
        summaryTag.textContent = candidates.education[key].campus;

        const pForDesc = document.createElement("p");
        pForDesc.textContent = candidates.education[key].details;

        detailsTAg.appendChild(summaryTag);
        detailsTAg.appendChild(pForDesc);

        ulTag.appendChild(detailsTAg);
    }
    sectionTag.appendChild(ulTag);

    
    articleTag.appendChild(sectionTag);
    //CourseWork
    if(candidates.hasOwnProperty("coursework")){
        const secForCourse = document.createElement("section");
        secForCourse.classList.add("coursework");

        const header = document.createElement("h4");
        header.textContent = "COURSEWORK";
        secForCourse.appendChild(header);

        const h4Tag = document.createElement("h4");
        h4Tag.textContent = "UNDERGRADUATE";

        secForCourse.appendChild(h4Tag);
        
        const ulTag = document.createElement("ul");
        for(let i = 0 ; i < candidates.coursework.undergraduate.length ; i++){
            const liForCourse = document.createElement("li");
            liForCourse.textContent = candidates.coursework.undergraduate[i];

            ulTag.appendChild(liForCourse);
        }
        secForCourse.appendChild(ulTag);
        articleTag.appendChild(secForCourse);
    }

    //Skils Sectiion

    if(candidates["skills"] !== undefined){
        const secForSkills = document.createElement("section");
        secForSkills.classList.add("skills");

        const h2ForSkills = document.createElement("h2");
        h2ForSkills.textContent ="SKILLS";
        secForSkills.appendChild(h2ForSkills);

        for( let key in candidates.skills){
            const h4Forskills = document.createElement("h4");
            h4Forskills.textContent = key.toUpperCase();
            secForSkills.appendChild(h4Forskills);
            const ulTag = document.createElement("ul");
            for(let i = 0 ; i < candidates.skills[key].length ; i++){
                const liTag = document.createElement("li");
                // liTag.textContent = candidates["skills"][key][i];
                liTag.textContent = candidates.skills[key][i];
                ulTag.appendChild(liTag);
                
            }
            secForSkills.appendChild(ulTag);
        }
        articleTag.appendChild(secForSkills);
    }

    // KeySKills
    if(candidates["keySkills"] !== undefined){
        const secForKeySKills = document.createElement("section");
        secForKeySKills.classList.add("keySkills");

        const h2ForKeySkills = document.createElement("h2");
        h2ForKeySkills.textContent = "KEY SKILLS"
        secForKeySKills.appendChild(h2ForKeySkills);

        const ulTag = document.createElement("ul");
        for(let i = 0 ; i < candidates.keySkills.length ; i++){
            const liTag = document.createElement("li");
            liTag.textContent = candidates.keySkills[i];
            ulTag.appendChild(liTag);
        }
        secForKeySKills.appendChild(ulTag);

        articleTag.appendChild(secForKeySKills);
    }

    // Contributions
    if(candidates["contributions"] !== undefined){
        const secForContribution = document.createElement("section");
        secForContribution.classList.add("contributions");

        const h2ForKeySkills = document.createElement("h2");
        h2ForKeySkills.textContent = "CONTRIBUTIONS"
        secForContribution.appendChild(h2ForKeySkills);

        const ulTag = document.createElement("ul");
        for(let i = 0 ; i < candidates.contributions.length ; i++){
            const liTag = document.createElement("li");
            liTag.textContent = candidates.contributions[i];
            ulTag.appendChild(liTag);
        }
        secForContribution.appendChild(ulTag);

        articleTag.appendChild(secForContribution);
    }



    return articleTag;
}

function createListeners(toBeShown , toBeHide , toBeStrong){

    const div = document.createElement("div");
    div.classList.add("read-more-container");
    
    const container = document.createElement("div");
    div.classList.add("container");

    const pTag = document.createElement("p");
    pTag.textContent = toBeShown;

    const spanTag = document.createElement("span");
    spanTag.classList.add("read-more-text");
    spanTag.textContent = toBeHide;

    const strongTag = document.createElement("strong");
    strongTag.textContent =toBeStrong;
    spanTag.appendChild(strongTag);
    pTag.appendChild(spanTag);

    const spanforReadMore = document.createElement("span");
    spanforReadMore.classList.add("read-more-btn");
    spanforReadMore.textContent = "Read More..";
    spanforReadMore.addEventListener("click", (event) => {
        const current = event.target;
        const isReadMoreBtn = current.classList.contains("read-more-btn");

        if (!isReadMoreBtn) return;

        const currentText = pTag.querySelector(".read-more-text");
        if (currentText) {
            currentText.classList.toggle("read-more-text--show");
            current.textContent = current.textContent.includes("Read More") ? "Read Less.." : "Read More..";
        } else {
            console.error("Element with class 'read-more-text' not found.");
        }
    });
    container.appendChild(spanforReadMore);


    div.appendChild(pTag);
    div.appendChild(container);

    return div;
}

function createExperience(){
    const internSection = document.createElement("section");
    internSection.classList.add("intern");

    const h2Tag = document.createElement('h2');
    h2Tag.textContent = "INDUSTRIAL EXPERIENCE";
    internSection.appendChild(h2Tag);
    const h4Tag = document.createElement('h4');
    h4Tag.textContent = candidates.experience.companyName;
    internSection.appendChild(h4Tag);

    const pTagForMonth = document.createElement("p");
    const anchorTag = document.createElement("a");
    anchorTag.textContent = candidates.experience.duration;
    anchorTag.href = "#"; anchorTag.title = "Remote";
    pTagForMonth.appendChild(anchorTag);

    internSection.appendChild(pTagForMonth);
    internSection.appendChild(createListeners(candidates.experience.description.toBeShown , candidates.experience.description.toBeHide 
        , candidates.experience.description.toBeStrong));

    return internSection;
}

function createProjects(){
    const secForProjects = document.createElement("section");
    secForProjects.classList.add("projects");

    const heading = document.createElement("h2");
    heading.textContent = "PROJECTS";
    
    secForProjects.appendChild(heading);

    for(let i = 0 ; i < candidates.projects.length ; i++){
        const div = document.createElement("div");
        div.classList.add(candidates.projects[i].hotel);

        const h4ForProjectName = document.createElement("h4");
        h4ForProjectName.textContent = candidates.projects[i].name;
        div.appendChild(h4ForProjectName);

        secForProjects.appendChild(div);

        secForProjects.appendChild(createListeners(candidates.projects[i].description.toBeShown , candidates.projects[i].description.toBeHide , candidates.projects[i].description.toBeStrong));
    }

    return secForProjects;
}

function createPartition2(){
    const articleTag = document.createElement("article");
    articleTag.classList.add("partition2");

    articleTag.appendChild(createExperience());
    articleTag.appendChild(createProjects());


    return articleTag;
}

function createContent(){
    const container = document.getElementById("container");
    container.appendChild(createHeader());
    const mainTag = document.createElement("main");
    mainTag.appendChild(createPartition1());
    mainTag.appendChild(createPartition2());
    container.appendChild(mainTag);

    return container;
}

window.onload = createContent();