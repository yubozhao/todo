import React from 'react';

const TodoRow = React.createClass({
  propTypes: {
    task: React.PropTypes.object.isRequired,
    toggleDelete: React.PropTypes.func.isRequired,
    toggleComplete: React.PropTypes.func.isRequired,
  },
  clickDelete(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.props.toggleDelete(this.props.task._id);
  },
  clickComplete(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.props.toggleComplete(this.props.task._id);
  },
  render() {
    let deleteButtonText = 'Delete';
    let liClass = "list-group-item";
    if (this.props.task.is_completed) {
      liClass += ' completed';
    }
    if (this.props.task.is_deleted) {
      deleteButtonText = "Undo delete";
      liClass += ' list-group-item-danger';
    }
    return (
      <li className={liClass}>
        <div className="row">
          <div className="col-lg-2">
            <input type="checkbox" readOnly={true}
                   checked={this.props.task.is_completed}
                   onClick={this.clickComplete} />
          </div>
          <div className="col-lg-8">
            <span className="text">
              {this.props.task.text}
            </span>
          </div>
          <div className="col-lg-2">
            <button type="button" className="btn" onClick={this.clickDelete}>
              {deleteButtonText}
            </button>
          </div>
        </div>
      </li>
    );
  }
});

export default TodoRow;
