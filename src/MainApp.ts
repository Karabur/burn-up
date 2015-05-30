import {createFactory, Component} from 'react';

interface MainAppProps {

}

interface MainAppState {

}

class MainApp extends Component<MainAppProps, MainAppState> {
  constructor(props: MainAppProps) {
  	super(props)
  }

  render() {
 	return require('src/MainAppTemplate.jsx')
  }
}


export = createFactory(MainApp)