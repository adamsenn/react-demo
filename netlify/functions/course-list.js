exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify([{
            "ID": "00000000-0000-0000-0000-000000000001",
            "Title": "Example Course",
            "URL": "http://ExampleProvider.com/example-course",
            "IsActive": true,
            "IsMobile": true,
            "Description": "This is text describing the example course.",
            "Thumbnail": "http:// ExampleProvider.com/example-course/image",
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
            "LastModifiedUTC": "2017-11-23T08:38:54.7573396+00:00",
            "Duration": "00:30:00",
            "MaxScore": 100,
            "MasteryScore": 65,
            "Subjects": [
                "Personal Development"
            ],
            "PublicationDate": "2019-09-02T14:13:50.001Z",
            "Keywords": "Keyword 1, Keyword 2, Keyword 3",
            "Localization": [{
                "Title": "curso de ejemplo",
                "Description": "descripción",
                "Language": "es-ES",
                "Keywords": "ejemplo, español"
            },
            {
                "Title": "exemple de cours",
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