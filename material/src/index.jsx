import React from 'react';
import { render as r } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';

import Counter from './Counter';

const f = 'DD.MM.YYYY HH:mm:ss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      day: moment().date()
    };

    this.onDatePickerChange = this.onDatePickerChange.bind(this);
  }

  onDatePickerChange(_, date) {
    this.setState({day: moment(date).date()});
  };

  render() {
    return <div>
      <Counter stars={this.state.day} />
      <DatePicker
        onChange={this.onDatePickerChange}
        floatingLabelText="Выберите дату!"
      />
    </div>
  }
}

r(
  <MuiThemeProvider><App /></MuiThemeProvider>,
  document.querySelector('.cont'),
);
