import { createSlice } from '@reduxjs/toolkit'

const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    isCollapse: false,
    tagList: [
      {
        path: '/',
        name: 'home',
        label: '首页'
      }
    ],
    currentMenu: {}
  },
  reducers: {
    changeCollapse: state => {
      state.isCollapse = !state.isCollapse
    },
    selectTagList: (state, { payload: val }) => {
      if (val.name !== 'home') {
        state.currentMenu = val
        //如果已经存在的tag就不添加
        const res = state.tagList.findIndex(item => item.name === val.name)
        if (res === -1) {
          state.tagList.push(val)
        }
      } else if (val.name !== 'home' && state.tagList.length === 1) {
        state.currentMenu = {}
      }
    },
    closeTag: (state, { payload: val }) => {
      let res = state.tagList.findIndex(item => item.name === val.name)
      state.tagList.splice(res, 1)
    },
    setCurrentMenu: (state, { payload: val }) => {
      if (val.name === 'home') {
        state.currentMenu = {}
      } else {
        state.currentMenu = val
      }
    }
  }
})

export const { changeCollapse, selectTagList, closeTag, setCurrentMenu } = tabSlice.actions
export default tabSlice.reducer
