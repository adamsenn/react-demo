const { v4: uuidv4 } = require('uuid')

exports.handler = async function (event, context) {
    const courseId = uuidv4()
    const timestamp = new Date()
    return {
        statusCode: 200,
        body: JSON.stringify([{
            "ID": courseId,
            "Title": `Example Course ${timestamp.toISOString()}`,
            "URL": `https://as-react-demo.netlify.app/?courseId=${courseId}`,
            "IsActive": true,
            "IsMobile": true,
            "Description": "This is text describing the example course.",
            "Version": "1.0",
            "Owners": [{
                "Name": "DXC HCM"
            }],
            "Instructors": [{
                "Title": "Mr",
                "FirstName": "John",
                "MiddleName": "J.",
                "LastName": "Doe",
                "Organization": "Provider Content Partner"
            }],
            "Languages": [
                "en-US"
            ],
            "LastModifiedUTC": timestamp.toISOString(),
            "Duration": "00:30:00",
            "MaxScore": 100,
            "MasteryScore": 65,
            "Subjects": [
                "Personal Development"
            ],
            "PublicationDate": timestamp.toISOString(),
            "Keywords": "Keyword 1, Keyword 2, Keyword 3",
            "Localization": [{
                "Title": `Curso de ${timestamp.toISOString()}`,
                "Description": "descripción",
                "Language": "es-ES",
                "Keywords": "ejemplo, español"
            },
            {
                "Title": `Exemple de ${timestamp.toISOString()}`,
                "Description": "description du cours à écrire en français",
                "Language": "fr-FR",
                "Keywords": "français, contenu"
            }],
            "Modalities": ["Watch"]
        }
        ]
        )
    }
}