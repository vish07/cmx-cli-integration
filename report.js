'use strict';

const e = React.createElement;
var data = {}

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = { severities: [], vulnerabilities: [], error: null, isLoaded: false };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/report")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          severities: result.severities,
          vulnerabilities: result.vulnerabilities,
        });
        data = {
          datasets: [{
            data: this.state.severities.map(x => x.count),
            label: 'Result per severity',
            backgroundColor: [
                '#ff6384',
                '#cc65fe',
                '#36a2eb'
            ]
          }],
          labels: this.state.severities.map(x => x.name)
        }
        var ctx = document.getElementById('severitiesChart').getContext('2d');
        new Chart(ctx, {
            type: 'polarArea',
            data: data,
        });
        data = {
          datasets: [{
            data: this.state.vulnerabilities.map(x => x.count),
            label: 'Result per vulnerability',
            backgroundColor: '#ff6384'
          }],
          labels: this.state.vulnerabilities.map(x => x.name)
        }
        var ctx = document.getElementById('vulnerabilitiesChart').getContext('2d');
        new Chart(ctx, {
            type: 'horizontalBar',
            data: data,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}

  render() {
    const { error, isLoaded, severities, vulnerabilities } = this.state;
    
    if (error) {
      return e('div', {}, "Error: " + error.message)
    } else if (!isLoaded) {
      return e('div', {}, "Fetching your scan result...")
    } else {
      return (
        e(
          'div',
          {},
          e('h3', {}, 'Result per severity'), e('ul', {}, severities.map(item => (e('li', {}, item.name+': ', item.count)))),
          e('h3', {}, 'Result per vulnerability'), e('ul', {}, vulnerabilities.map(item => (e('li', {}, item.name+': ', item.count)))),
        )
      );
    }
  }
}

const domContainer = document.querySelector('#report_container');
ReactDOM.render(e(Report), domContainer);
