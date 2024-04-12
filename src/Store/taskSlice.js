import { createSlice } from '@reduxjs/toolkit'

const taskSlice=createSlice({
    name:'task',
    initialState:{
        tasks:[]
    },
    reducers:{
        addtask(state,action)
        {
            // console.log(action.payload);
            const updatedTask=state.tasks.concat(action.payload)
            return{
                ...state,tasks:updatedTask
            }
        },
        removeTask(state,action)
        {

        }
    }
    
})

export const {addtask,removeTask}= taskSlice.actions;

export const taskReducer=taskSlice.reducer;