var Child = React.createClass({
  render: function(){
    var useTag = '<use xlink:href="#logo" />';
    return (
        <div className="card z-axis--3">
          <div className="card__header">
            <h1>
              <svg className="c-logo" height="4em" viewBox="0 0 20 20" preserveAspectRatio="xMinYMid" dangerouslySetInnerHTML={{__html: useTag }}/>
            </h1>
          </div>
        </div>
    )
  }
});