import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alert }) => {
    alert !== null && alert.length > 0 &&
        alert.map(alert => {
            return (
                <div key={alert.id} className={`text-white bg-${alert.alertType}`}>
                    {alert.msg}
                </div>
            )
        }
           )
};

Alert.propTypes = {
    alert: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
    return {
        alert: state.alert
    }
}

export default connect(mapStateToProps, null)(Alert);