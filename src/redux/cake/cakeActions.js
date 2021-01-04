import { BUY_CAKE } from './cakeTypes'

// default payload = 1
export const buyCake =(number = 1)=>{
    return {
        type: BUY_CAKE,
        payload: number
    }
}


// we create action here
// i.e. action-creator