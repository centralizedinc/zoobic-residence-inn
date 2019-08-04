const state = {
    room: "",
    sender: ""
  };
  
  const mutations = {
    ROOM(state, payload) {
      state.room = payload.room;
      state.sender = payload.sender;
    },
    CLEAR_ROOM(state) {
      state.room = "";
      state.sender = "";
    }
  };
  
  export default {
    state,
    mutations
  };
  