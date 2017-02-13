import React from 'react';

class Chartist extends React.Component {

  componentWillReceiveProps(newProps) {
    this.updateChart(newProps);
  }

  componentWillUnmount() {
    if (this.chartist) {
      try {
        this.chartist.detach();
      } catch (err) {
        throw new Error('Internal chartist error', err);
      }
    }
  }

  componentDidMount() {
    this.updateChart(this.props);
  }

  updateChart(config) {
    let Chartist = require('chartist');

    let { data } = config;
    let options = config.options || {};
    let responsiveOptions = config.responsiveOptions || [];
    let event;

    if (this.chartist) {
      this.chartist.update(data, options, responsiveOptions);
    } else {
      this.chartist = new Chartist.Line(this.refs.chart, {
        series: [
[2000000,1999957,1999884,1999831,1999765,1999697,1999549,1999404,1999234,1999202,1999024,1998974,1998789,1998631,1998623,1998525,1998409,1998360,1998255,1998211,1998088,1998069,1997991,1997991,1997954,1997928,1997870,1997708,1997541,1997427,1997322,1997126,1997122,1997028,1996934,1996879,1996753,1996563,1996392,1996196,1996164,1995995,1995820,1995711,1995679,1995589,1995558,1995360,1995193,1995047,1994853,1994825,1994677,1994487,1994447,1994282,1994227,1994188,1994036,1993861,1993677],
        ]
    }, {
        showArea: true,
        fullWidth: true,
        showPoint: false,
        lineSmooth: false
    });

      if (config.listener) {
        for (event in config.listener) {
          if (config.listener.hasOwnProperty(event)) {
            this.chartist.on(event, config.listener[event]);
          }
        }
      }

    }

    return this.chartist;
  }

  render() {
    const className = this.props.className ? ' ' + this.props.className : ''
    const style = this.props.style ? this.props.style : {};
    return (<div className={'chart' + className} ref='chart' style={style} />)
  }

}

Chartist.propTypes = {
  data: React.PropTypes.object.isRequired,
  className: React.PropTypes.string,
  options: React.PropTypes.object,
  responsiveOptions: React.PropTypes.array,
  style: React.PropTypes.object
}

export default Chartist;