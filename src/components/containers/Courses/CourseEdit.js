import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchCourse, editCourse  } from '../../../redux/course/courseReducer';
;


class CourseEdit extends React.Component {
    componentDidMount() {
        this.props.fetchCourse(this.props.match.params.id);
    }
    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    renderInput = ({ input, label, meta }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
                <div>{this.renderError(meta)}</div>
            </div>
        )
    }
    onSubmit = (formValues) => {
        this.props.editCourse(this.props.match.params.id, formValues);
    }
    render() {
        if (!this.props.course) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                    <Field name="name" component={this.renderInput} label="Edit the Course name" />
                    <button className="ui button primary">Edit</button>
                </form>
            </div>
        )
    }
}
const formWrapped = reduxForm({
    form: 'courseEdit',
})(CourseEdit);

const mapStateToProps = (state, ownProps) => {
    return { course: state.courses[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchCourse, editCourse })(formWrapped);