import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({ userData, fetchUsers }) {

    useEffect(() => {
        fetchUsers()
    }, []) //this empty dependency array is used so that fetchUser() dispatch only once i.e. execute only one time


    return userData.loading ? (<h2>Loading</h2>) : userData.errorMsg ? (<h2>{userData.errorMsg}</h2>) :
        (
            <div>
                <h2>User List</h2>
                <div>
                    {
                        userData.userList.map(item => <p>{item.name}</p>)
                        
                    }
                </div>
            </div>
        )
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        userData: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
