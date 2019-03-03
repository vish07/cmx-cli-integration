from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
import xmltodict
import json

app = Flask(__name__)
CORS(app)
api = Api(app)

class Report(Resource):
    def get(self):
        with open('report.xml', "rb") as fd:
            doc = xmltodict.parse(fd.read(), xml_attribs=True)

        result = {}
        high = medium = low = 0
        vulnerabilities = []
        for x in doc['CxXMLResults']['Query']:
            if x['@Severity'] == 'High':
                high += len(x['Result'])
            elif x['@Severity'] == 'Medium':
                medium += len(x['Result'])
            elif x['@Severity'] == 'Low':
                low += len(x['Result'])
            
            vulnerabilities.append(
                {
                    "name": x['@name'],
                    "count": len(x['Result'])
                }
            )

        result.update({"severities": [
                {"name": "High", "count": high},
                {"name": "Medium", "count": medium},
                {"name": "Low", "count": low}
            ]}
        )

        result.update({"vulnerabilities": vulnerabilities})

        return result, 200

api.add_resource(Report, "/report")
app.run(debug=True)
