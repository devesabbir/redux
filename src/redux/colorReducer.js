const initialState = 'gray'

const colorReducer = ( state = initialState , {type , payload } ) => {
      switch (type) {
         case 'GRAY':
            return state = 'gray'
         case 'RED': 
          return state = 'red'
         case 'GREEN':
            return state = 'green'

         default : 
         return state;
      }
}

export default colorReducer;