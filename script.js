/* =====================================================
   MC-WEB
   FORMULAIRE CLIENT DYNAMIQUE
   PARTIE 1 / 2
===================================================== */

const form = document.getElementById("clientForm");

const steps = [
    ...document.querySelectorAll(".form-step")
];

const indicators = [
    ...document.querySelectorAll("[data-step-indicator]")
];

const dynamicQuestions =
    document.getElementById("dynamicQuestions");

const review =
    document.getElementById("review");

const success =
    document.getElementById("success");

let currentStep = 1;


/* =====================================================
   QUESTIONS DE CHAQUE TYPE DE SITE
===================================================== */

const siteQuestions = {


    /* ================================
       SITE VITRINE
    ================================= */

    "Site vitrine": [

        {
            id: "vitrineActivity",
            label: "Quelle est votre activité ?",
            type: "textarea",
            placeholder:
                "Décrivez votre activité, vos services ou vos produits.",
            required: true
        },

        {
            id: "vitrineServices",
            label: "Quels services souhaitez-vous présenter ?",
            type: "textarea",
            placeholder:
                "Ex. Création de sites, marketing digital, photographie..."
        },

        {
            id: "vitrinePages",
            label: "Quelles pages souhaitez-vous ?",
            type: "text",
            placeholder:
                "Ex. Accueil, À propos, Services, Contact..."
        },

        {
            id: "vitrineContact",
            label: "Quelles informations de contact souhaitez-vous afficher ?",
            type: "textarea",
            placeholder:
                "Téléphone, WhatsApp, e-mail, adresse, réseaux sociaux..."
        },

        {
            id: "vitrineSocial",
            label: "Quels réseaux sociaux souhaitez-vous intégrer ?",
            type: "text",
            placeholder:
                "Ex. Facebook, Instagram, TikTok..."
        }

    ],


    /* ================================
       BOUTIQUE EN LIGNE
    ================================= */

    "Boutique en ligne": [

        {
            id: "shopName",
            label: "Quel est le nom de votre boutique ?",
            type: "text",
            placeholder:
                "Ex. MC Fashion",
            required: true
        },

        {
            id: "shopProducts",
            label: "Quels produits souhaitez-vous vendre ?",
            type: "textarea",
            placeholder:
                "Décrivez les principaux produits ou services que vous vendrez.",
            required: true
        },

        {
            id: "shopQuantity",
            label: "Combien de produits prévoyez-vous environ ?",
            type: "text",
            placeholder:
                "Ex. 20 produits, 100 produits..."
        },

        {
            id: "shopCategories",
            label: "Quelles catégories de produits souhaitez-vous ?",
            type: "textarea",
            placeholder:
                "Ex. Vêtements, chaussures, accessoires..."
        },

        {
            id: "shopPayment",
            label: "Quels moyens de paiement souhaitez-vous proposer ?",
            type: "textarea",
            placeholder:
                "Ex. Carte bancaire, Mobile Money, PayPal..."
        },

        {
            id: "shopDelivery",
            label: "Comment souhaitez-vous gérer la livraison ?",
            type: "textarea",
            placeholder:
                "Ex. Livraison à domicile, retrait en boutique..."
        },

        {
            id: "shopAccount",
            label: "Souhaitez-vous permettre aux clients de créer un compte ?",
            type: "select",
            options: [
                "Oui",
                "Non",
                "Je ne sais pas encore"
            ]
        },

        {
            id: "shopOrders",
            label: "Comment souhaitez-vous gérer les commandes ?",
            type: "textarea",
            placeholder:
                "Expliquez ce que vous souhaitez voir après qu'un client passe une commande."
        }

    ],


    /* ================================
       PORTFOLIO
    ================================= */

    "Portfolio": [

        {
            id: "portfolioProfession",
            label: "Quel est votre domaine d'activité ?",
            type: "text",
            placeholder:
                "Ex. Graphiste, photographe, développeur..."
        },

        {
            id: "portfolioPresentation",
            label: "Présentez-vous brièvement.",
            type: "textarea",
            placeholder:
                "Parlez de votre parcours, de votre activité et de vos compétences.",
            required: true
        },

        {
            id: "portfolioSkills",
            label: "Quelles sont vos principales compétences ?",
            type: "textarea",
            placeholder:
                "Ex. Design graphique, photographie, montage vidéo..."
        },

        {
            id: "portfolioProjects",
            label: "Quels projets ou réalisations souhaitez-vous présenter ?",
            type: "textarea",
            placeholder:
                "Décrivez les projets que vous souhaitez montrer."
        },

        {
            id: "portfolioExperience",
            label: "Souhaitez-vous présenter votre expérience professionnelle ?",
            type: "select",
            options: [
                "Oui",
                "Non"
            ]
        },

        {
            id: "portfolioGallery",
            label: "Souhaitez-vous une galerie de photos ou de réalisations ?",
            type: "select",
            options: [
                "Oui",
                "Non"
            ]
        },

        {
            id: "portfolioTestimonials",
            label: "Souhaitez-vous afficher des témoignages de clients ?",
            type: "select",
            options: [
                "Oui",
                "Non"
            ]
        }

    ],


    /* ================================
       BLOG
    ================================= */

    "Blog": [

        {
            id: "blogTheme",
            label: "Quel sera le thème principal de votre blog ?",
            type: "textarea",
            placeholder:
                "Ex. Technologie, motivation, actualités, mode..."
        },

        {
            id: "blogArticles",
            label: "Quels types d'articles souhaitez-vous publier ?",
            type: "textarea",
            placeholder:
                "Décrivez les contenus que vous souhaitez publier."
        },

        {
            id: "blogCategories",
            label: "Quelles catégories souhaitez-vous créer ?",
            type: "textarea",
            placeholder:
                "Ex. Actualités, Conseils, Tutoriels..."
        },

        {
            id: "blogAuthors",
            label: "Qui pourra publier les articles ?",
            type: "select",
            options: [
                "Moi uniquement",
                "Plusieurs auteurs",
                "Je ne sais pas encore"
            ]
        },

        {
            id: "blogComments",
            label: "Souhaitez-vous permettre les commentaires ?",
            type: "select",
            options: [
                "Oui",
                "Non",
                "Je ne sais pas encore"
            ]
        },

        {
            id: "blogNewsletter",
            label: "Souhaitez-vous une inscription à une newsletter ?",
            type: "select",
            options: [
                "Oui",
                "Non",
                "Je ne sais pas encore"
            ]
        },

        {
            id: "blogSocial",
            label: "Souhaitez-vous permettre le partage des articles sur les réseaux sociaux ?",
            type: "select",
            options: [
                "Oui",
                "Non"
            ]
        }

    ],


    /* ================================
       SITE D'ENTREPRISE
    ================================= */

    "Site d'entreprise": [

        {
            id: "companyPresentation",
            label: "Présentez votre entreprise.",
            type: "textarea",
            placeholder:
                "Nom, secteur d'activité, historique, mission...",
            required: true
        },

        {
            id: "companyServices",
            label: "Quels sont vos principaux services ou produits ?",
            type: "textarea",
            placeholder:
                "Présentez les services ou produits de votre entreprise."
        },

        {
            id: "companyTeam",
            label: "Souhaitez-vous présenter votre équipe ?",
            type: "select",
            options: [
                "Oui",
                "Non"
            ]
        },

        {
            id: "companyContact",
            label: "Quelles coordonnées professionnelles souhaitez-vous afficher ?",
            type: "textarea",
            placeholder:
                "Téléphone, e-mail, adresse, WhatsApp..."
        },

        {
            id: "companySocial",
            label: "Quels réseaux sociaux de l'entreprise souhaitez-vous intégrer ?",
            type: "text",
            placeholder:
                "Ex. Facebook, LinkedIn, Instagram..."
        },

        {
            id: "companyPages",
            label: "Quelles pages souhaitez-vous sur le site ?",
            type: "textarea",
            placeholder:
                "Ex. Accueil, Entreprise, Services, Équipe, Contact..."
        }

    ],


    /* ================================
       AUTRE
    ================================= */

    "Autre": [

        {
            id: "otherDescription",
            label: "Décrivez précisément le site que vous souhaitez.",
            type: "textarea",
            placeholder:
                "Expliquez le fonctionnement souhaité de votre site.",
            required: true
        },

        {
            id: "otherFeatures",
            label: "Quelles fonctionnalités souhaitez-vous ?",
            type: "textarea",
            placeholder:
                "Décrivez toutes les fonctionnalités que vous souhaitez."
        },

        {
            id: "otherExample",
            label: "Avez-vous un exemple de site que vous aimez ?",
            type: "text",
            placeholder:
                "Vous pouvez indiquer le nom ou le lien du site."
        }

    ]

};


/* =====================================================
   AFFICHER UNE ÉTAPE
===================================================== */

function showStep(step) {

    currentStep = step;

    steps.forEach(section => {

        section.classList.toggle(
            "active",
            Number(section.dataset.step) === step
        );

    });


    indicators.forEach(indicator => {

        const number =
            Number(indicator.dataset.stepIndicator);

        indicator.classList.toggle(
            "active",
            number === step
        );

        indicator.classList.toggle(
            "done",
            number < step
        );

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   AFFICHER LES QUESTIONS DYNAMIQUES
===================================================== */

function generateDynamicQuestions() {

    dynamicQuestions.innerHTML = "";

    const selectedTypes = [
        ...document.querySelectorAll(
            'input[name="siteType"]:checked'
        )
    ].map(input => input.value);


    selectedTypes.forEach(type => {

        const questions =
            siteQuestions[type];

        if (!questions) return;


        const section =
            document.createElement("div");

        section.className =
            "question-section dynamic-section";


        const title =
            document.createElement("div");

        title.className =
            "section-title";

        title.textContent =
            "Questions — " + type;


        section.appendChild(title);


        questions.forEach(question => {

            const field =
                createQuestion(question);

            section.appendChild(field);

        });


        dynamicQuestions.appendChild(section);

    });

}


/* =====================================================
   CRÉER UNE QUESTION
===================================================== */

function createQuestion(question) {

    const field =
        document.createElement("div");

    field.className =
        "field";


    const label =
        document.createElement("label");

    label.setAttribute(
        "for",
        question.id
    );


    label.innerHTML =
        question.label +
        (
            question.required
                ? ' <span>*</span>'
                : ''
        );


    field.appendChild(label);


    /* TEXTAREA */

    if (question.type === "textarea") {

        const textarea =
            document.createElement("textarea");

        textarea.id =
            question.id;

        textarea.name =
            question.id;

        textarea.placeholder =
            question.placeholder || "";


        if (question.required) {
            textarea.required = true;
        }


        field.appendChild(textarea);

    }


    /* INPUT */

    else if (question.type === "text") {

        const input =
            document.createElement("input");

        input.type =
            "text";

        input.id =
            question.id;

        input.name =
            question.id;

        input.placeholder =
            question.placeholder || "";


        if (question.required) {
            input.required = true;
        }


        field.appendChild(input);

    }


    /* SELECT */

    else if (question.type === "select") {

        const select =
            document.createElement("select");

        select.id =
            question.id;

        select.name =
            question.id;


        const emptyOption =
            document.createElement("option");

        emptyOption.value =
            "";

        emptyOption.textContent =
            "Sélectionnez une option";

        select.appendChild(emptyOption);


        question.options.forEach(option => {

            const optionElement =
                document.createElement("option");

            optionElement.value =
                option;

            optionElement.textContent =
                option;

            select.appendChild(optionElement);

        });


        if (question.required) {
            select.required = true;
        }


        field.appendChild(select);

    }


    return field;

}


/* =====================================================
   NETTOYER LES ERREURS
===================================================== */

function clearErrors() {

    document
        .querySelectorAll(".field.error")
        .forEach(field => {

            field.classList.remove("error");

            const error =
                field.querySelector(".error-message");

            if (error) {
                error.remove();
            }

        });


    document
        .querySelectorAll(".type-error")
        .forEach(error => {
            error.remove();
        });

}


/* =====================================================
   AJOUTER UNE ERREUR
===================================================== */

function addError(input, message) {

    const field =
        input.closest(".field");


    field.classList.add("error");


    const error =
        document.createElement("div");


    error.className =
        "error-message";


    error.textContent =
        message;


    field.appendChild(error);

}


/* =====================================================
   VALIDER LE TYPE DE SITE
===================================================== */

function validateTypes() {

    clearErrors();


    const selected =
        document.querySelectorAll(
            'input[name="siteType"]:checked'
        );


    if (selected.length === 0) {

        const error =
            document.createElement("div");


        error.className =
            "error-message type-error";


        error.textContent =
            "Veuillez sélectionner au moins un type de site.";


        document
            .getElementById("typeError")
            .appendChild(error);


        return false;

    }


    return true;

}


/* =====================================================
   VALIDER LE PROJET
===================================================== */

function validateProject() {

    clearErrors();

    let valid = true;


    const requiredIds = [

        "projectName",

        "generalDescription",

        "mainObjective"

    ];


    requiredIds.forEach(id => {

        const input =
            document.getElementById(id);


        if (!input.value.trim()) {

            addError(
                input,
                "Ce champ est obligatoire."
            );

            valid = false;

        }

    });


    const dynamicRequired =
        dynamicQuestions.querySelectorAll(
            "[required]"
        );


    dynamicRequired.forEach(input => {

        if (!input.value.trim()) {

            addError(
                input,
                "Ce champ est obligatoire."
            );

            valid = false;

        }

    });


    return valid;

}


/* =====================================================
   VALIDER LES COORDONNÉES
===================================================== */

function validateContact() {

    clearErrors();

    let valid = true;


    const name =
        document.getElementById("fullName");

    const email =
        document.getElementById("email");

    const phone =
        document.getElementById("phone");


    if (!name.value.trim()) {

        addError(
            name,
            "Veuillez indiquer votre nom et prénom."
        );

        valid = false;

    }


    if (!email.value.trim()) {

        addError(
            email,
            "Veuillez indiquer votre adresse e-mail."
        );

        valid = false;

    }
    else if (!email.validity.valid) {

        addError(
            email,
            "Veuillez saisir une adresse e-mail valide."
        );

        valid = false;

    }


    if (!phone.value.trim()) {

        addError(
            phone,
            "Veuillez indiquer votre numéro de téléphone."
        );

        valid = false;

    }


    return valid;
/* =====================================================
   MC-WEB
   FORMULAIRE CLIENT DYNAMIQUE
   PARTIE 2 / 2
===================================================== */


/* =====================================================
   RÉCUPÉRER TOUTES LES DONNÉES DU FORMULAIRE
===================================================== */

function getData() {

    const data = {};

    const formData =
        new FormData(form);


    /* TYPES DE SITE */

    data.siteTypes =
        formData.getAll("siteType");


    /* INFORMATIONS GÉNÉRALES */

    data.projectName =
        formData.get("projectName") || "";

    data.company =
        formData.get("company") || "";

    data.generalDescription =
        formData.get("generalDescription") || "";

    data.mainObjective =
        formData.get("mainObjective") || "";

    data.colors =
        formData.get("colors") || "";

    data.additional =
        formData.get("additional") || "";


    /* COORDONNÉES */

    data.fullName =
        formData.get("fullName") || "";

    data.email =
        formData.get("email") || "";

    data.phone =
        formData.get("phone") || "";

    data.preferredContact =
        formData.get("preferredContact") || "";


    /* QUESTIONS SPÉCIFIQUES */

    data.dynamic = {};


    Object.keys(siteQuestions).forEach(type => {

        siteQuestions[type].forEach(question => {

            const value =
                formData.get(question.id);


            if (value !== null) {

                data.dynamic[question.id] =
                    value;

            }

        });

    });


    return data;

}



/* =====================================================
   PROTECTION DU TEXTE AFFICHÉ
===================================================== */

function safe(value) {

    const div =
        document.createElement("div");


    div.textContent =
        value || "Non renseigné";


    return div.innerHTML;

}



/* =====================================================
   CRÉER UNE LIGNE DU RÉCAPITULATIF
===================================================== */

function reviewRow(label, value) {

    return `

        <div class="review-row">

            <div class="review-label">
                ${safe(label)}
            </div>

            <div class="review-value">
                ${safe(value)}
            </div>

        </div>

    `;

}



/* =====================================================
   CONSTRUIRE LE RÉCAPITULATIF
===================================================== */

function buildReview() {

    const data =
        getData();


    let html = "";


    /* =================================================
       TYPES DE SITE
    ================================================= */

    html += `

        <div class="review-group">

            <h3>
                Types de site sélectionnés
            </h3>

            ${reviewRow(
                "Types",
                data.siteTypes.join(", ")
            )}

        </div>

    `;



    /* =================================================
       INFORMATIONS GÉNÉRALES
    ================================================= */

    html += `

        <div class="review-group">

            <h3>
                Informations générales
            </h3>

            ${reviewRow(
                "Nom du projet",
                data.projectName
            )}

            ${reviewRow(
                "Entreprise / activité",
                data.company
            )}

            ${reviewRow(
                "Description",
                data.generalDescription
            )}

            ${reviewRow(
                "Objectif",
                data.mainObjective
            )}

            ${reviewRow(
                "Couleurs / style",
                data.colors
            )}

        </div>

    `;



    /* =================================================
       QUESTIONS SPÉCIFIQUES À CHAQUE TYPE
    ================================================= */

    data.siteTypes.forEach(type => {

        const questions =
            siteQuestions[type];


        if (!questions) return;


        html += `

            <div class="review-group">

                <h3>
                    ${safe(type)}
                </h3>

        `;


        questions.forEach(question => {

            html += reviewRow(
                question.label,
                data.dynamic[question.id]
            );

        });


        html += `

            </div>

        `;

    });



    /* =================================================
       INFORMATIONS SUPPLÉMENTAIRES
    ================================================= */

    html += `

        <div class="review-group">

            <h3>
                Informations supplémentaires
            </h3>

            ${reviewRow(
                "Demandes particulières",
                data.additional
            )}

        </div>

    `;



    /* =================================================
       COORDONNÉES
    ================================================= */

    html += `

        <div class="review-group">

            <h3>
                Coordonnées
            </h3>

            ${reviewRow(
                "Nom et prénom",
                data.fullName
            )}

            ${reviewRow(
                "E-mail",
                data.email
            )}

            ${reviewRow(
                "Téléphone",
                data.phone
            )}

            ${reviewRow(
                "Moyen de contact",
                data.preferredContact
            )}

        </div>

    `;


    review.innerHTML =
        html;

}



/* =====================================================
   SAUVEGARDER AUTOMATIQUEMENT LE BROUILLON
===================================================== */

function saveDraft() {

    localStorage.setItem(
        "mcWebDraft",
        JSON.stringify(
            getData()
        )
    );

}



/* =====================================================
   RESTAURER LE BROUILLON
===================================================== */

function restoreDraft() {

    const raw =
        localStorage.getItem(
            "mcWebDraft"
        );


    if (!raw) return;


    try {

        const data =
            JSON.parse(raw);


        /* TYPES */

        document
            .querySelectorAll(
                'input[name="siteType"]'
            )
            .forEach(input => {

                input.checked =
                    data.siteTypes.includes(
                        input.value
                    );

            });


        /* INFORMATIONS GÉNÉRALES */

        document.getElementById(
            "projectName"
        ).value =
            data.projectName || "";


        document.getElementById(
            "company"
        ).value =
            data.company || "";


        document.getElementById(
            "generalDescription"
        ).value =
            data.generalDescription || "";


        document.getElementById(
            "mainObjective"
        ).value =
            data.mainObjective || "";


        document.getElementById(
            "colors"
        ).value =
            data.colors || "";


        document.getElementById(
            "additional"
        ).value =
            data.additional || "";


        /* COORDONNÉES */

        document.getElementById(
            "fullName"
        ).value =
            data.fullName || "";


        document.getElementById(
            "email"
        ).value =
            data.email || "";


        document.getElementById(
            "phone"
        ).value =
            data.phone || "";


        document.getElementById(
            "preferredContact"
        ).value =
            data.preferredContact || "";


        /* QUESTIONS DYNAMIQUES */

        generateDynamicQuestions();


        Object.keys(data.dynamic || {})
            .forEach(id => {

                const input =
                    document.getElementById(id);


                if (input) {

                    input.value =
                        data.dynamic[id];

                }

            });

    }
    catch (error) {

        console.log(
            "Impossible de restaurer le brouillon.",
            error
        );

    }

}



/* =====================================================
   SÉLECTION D'UN TYPE DE SITE
===================================================== */

document
    .querySelectorAll(
        'input[name="siteType"]'
    )
    .forEach(input => {

        input.addEventListener(
            "change",
            () => {

                generateDynamicQuestions();

                saveDraft();

            }
        );

    });



/* =====================================================
   BOUTON : CONTINUER APRÈS LE TYPE
===================================================== */

document
    .getElementById("continueType")
    .addEventListener(
        "click",
        () => {

            if (!validateTypes()) {

                return;

            }


            generateDynamicQuestions();


            showStep(2);

        }
    );



/* =====================================================
   BOUTON : RETOUR AU TYPE
===================================================== */

document
    .getElementById("backToType")
    .addEventListener(
        "click",
        () => {

            clearErrors();

            showStep(1);

        }
    );



/* =====================================================
   BOUTON : CONTINUER VERS LES COORDONNÉES
===================================================== */

document
    .getElementById("continueContact")
    .addEventListener(
        "click",
        () => {

            if (!validateProject()) {

                return;

            }


            saveDraft();


            showStep(3);

        }
    );



/* =====================================================
   BOUTON : RETOUR AU PROJET
===================================================== */

document
    .getElementById("backToProject")
    .addEventListener(
        "click",
        () => {

            clearErrors();

            showStep(2);

        }
    );



/* =====================================================
   BOUTON : VÉRIFIER MES RÉPONSES
===================================================== */

document
    .getElementById("continueReview")
    .addEventListener(
        "click",
        () => {

            if (!validateContact()) {

                return;

            }


            saveDraft();


            buildReview();


            showStep(4);

        }
    );



/* =====================================================
   BOUTON : MODIFIER
===================================================== */

document
    .getElementById("backToContact")
    .addEventListener(
        "click",
        () => {

            clearErrors();

            showStep(3);

        }
    );



/* =====================================================
   ENVOI DU FORMULAIRE
===================================================== */

form.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const data =
            getData();


        /*
         * Pour le moment, les données sont enregistrées
         * dans le navigateur.
         *
         * Plus tard, nous connecterons cette partie
         * à votre espace administrateur / base de données.
         */

        console.log(
            "DONNÉES DU CLIENT :",
            data
        );


        localStorage.setItem(
            "lastClientRequest",
            JSON.stringify(data)
        );


        /* Cacher le formulaire */

        form.hidden =
            true;


        /* Cacher la progression */

        document
            .querySelector(".progress")
            .hidden =
            true;


        /* Afficher le message de succès */

        success.hidden =
            false;


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);



/* =====================================================
   NOUVELLE DEMANDE
===================================================== */

document
    .getElementById("newRequest")
    .addEventListener(
        "click",
        () => {

            /* Supprimer le brouillon */

            localStorage.removeItem(
                "mcWebDraft"
            );


            /* Réinitialiser le formulaire */

            form.reset();


            /* Supprimer les questions dynamiques */

            dynamicQuestions.innerHTML =
                "";


            /* Cacher le message de succès */

            success.hidden =
                true;


            /* Réafficher le formulaire */

            form.hidden =
                false;


            /* Réafficher la progression */

            document
                .querySelector(".progress")
                .hidden =
                false;


            clearErrors();


            /* Revenir à la première étape */

            showStep(1);

        }
    );



/* =====================================================
   SAUVEGARDE AUTOMATIQUE
===================================================== */

form.addEventListener(
    "input",
    () => {

        saveDraft();

    }
);


form.addEventListener(
    "change",
    () => {

        saveDraft();

    }
);



/* =====================================================
   CHARGEMENT INITIAL
===================================================== */

restoreDraft();


/* =====================================================
   FIN DU SCRIPT
===================================================== */
}
