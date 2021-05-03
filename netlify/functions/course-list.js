import crypto from 'crypto'

exports.handler = async function (event, context) {
    const uuidParts = [
        crypto.randomBytes(8),
        crypto.randomBytes(4),
        crypto.randomBytes(4),
        crypto.randomBytes(4),
        crypto.randomBytes(12)
    ]
    const courseId = uuidParts.map(b => b.toString('hex')).join('-')
    const timestamp = new Date()
    return {
        statusCode: 200,
        body: JSON.stringify([{
            "ID": courseId,
            "Title": `Example Course ${timestamp.toISOString()}`,
            "URL": `https://as-react-demo.netlify.app/#/launch/${courseId}`,
            "IsActive": true,
            "IsMobile": true,
            "Description": "This is text describing the example course.",
            "Version": "1.0",
            "Owners": [{
                "Name": "The Example Provider Content Partner"
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
                "Title": `curso de  ${timestamp.toISOString()}`,
                "Description": "descripción",
                "Language": "es-ES",
                "Keywords": "ejemplo, español"
            },
            {
                "Title": `exemple de  ${timestamp.toISOString()}`,
                "Description": "description du cours à écrire en français",
                "Language": "fr-FR",
                "Keywords": "français, contenu"
            }],
            "Modalities": [
                "Watch",
                "Read"
            ]
        }
        ]
        )
    }
}