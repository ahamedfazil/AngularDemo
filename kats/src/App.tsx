import React, { Component } from 'react';
import '../src/assets/styles/App.css';
import '../src/assets/styles/NewTicket.css';
import storeFactory from './store'
import { addError } from './actions'
import { initializeIcons } from '@uifabric/icons';
import { addTicket } from './actions/ticket';
import { getEngagementTypes, getAccountingFrameworks } from './actions/dictionaryItem';
import NewTicket from './components/NewTicket';




initializeIcons('https://static2.sharepointonline.com/files/fabric/assets/icons/');


const initialState = {}


const store = storeFactory(initialState)


// store.dispatch(requestSubmitterInfo("larry.akin@kpmg.co.uk"))
//store.dispatch(fetchSubmitterInfo("larry.akin@kpmg.co.uk")).then(() => console.log(store.getState()))




store.dispatch(addTicket({
  
    "id":1894435,
    "submitterId": 26,
    "watcher": [
        2,
        3,
        19
    ],
    "respIndividual": 22,
    "assignee": 5,
    "reviewer": 6,
    "assignedTo": 5,
    "auditTeam": [
        9,
        10
    ],
    "engagementName": "Hartshead Square Developments Ltd ",
    "engagementChargeCode": 2551346,
    "periodEnd": new Date("2019-03-25"),
    "engagementType": [1,3],
    "auditingStandard": [1,2],
    "accountingFramework": [1],
    "category": 1,
    "topic": [2,3],
    "ticketType": 2,
    "subject": "Approval needed for Equinox Employee Benefit Trust Limited",
    "detailedAnalysis": "I have a group reporting under UK GAAP (top company Hartshead Square Developments Ltd). There are no SEC requirements and the charge code is 2494423. They are involved in investment property so properties clearly need to be carried at market value.",
    "isUrgent": true,
    "reasonForUrgency": "I need it done ASAP",
    "supportTeam": 1,
    "status": 1,
    "training": false,
    "faq": false,
    "label": [1,35,18],
    "finalConsultation": "Lorem ipsum...",
    "conclusion": "Lorem ipsum",
    "addToKb": true,
    "comments": [
        2,
        15,
        5,
        8
    ],
    "supportTeamComments": [
        1,
        18
    ]}
))
  
store.dispatch(
    addError("Please try again later")
  )

store.dispatch<any>(getEngagementTypes())
store.dispatch<any>(getAccountingFrameworks())


store.dispatch(
  addError("Unable to process your request")
)


class App extends Component {

  
  
  render() {
    return (
     
      <div className="App">
        {/* <header className="App-header">
         </header> */}
        <NewTicket /> 
     </div>
   
    );
  }
}

export default App;

