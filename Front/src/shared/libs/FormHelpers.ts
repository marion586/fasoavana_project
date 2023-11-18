/* eslint-disable @typescript-eslint/no-explicit-any */
export const selectCustomStyle = {
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor:
        state.isSelected && state.isFocused
          ? "#a52739"
          : state.isSelected
          ? "#850911"
          : state.isFocused
          ? "#fae2e8"
          : "#FFF",
      "&:active": {
        backgroundColor: "#85091110",
      },
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: state.isFocused ? "#5e627800" : "#5e627800",
      boxShadow: state.isFocused ? "#5e627850" : "#5e627850",
      "&:hover": {
        borderColor: state.isFocused ? "#5e627800" : "#5e627800",
        boxShadow: state.isFocused ? "#5e6278ac" : "#5e6278ac",
        backgroundColor: "#e4e6ef",
      },
      backgroundColor: "#f5f8fa",
      height: 45,
      borderRadius: "0.475rem",
    }),
  };

  export const multiSelectCustomStyle = {
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor:
        state.isSelected && state.isFocused
          ? "#a52739"
          : state.isSelected
          ? "#850911"
          : state.isFocused
          ? "#fae2e8"
          : "#FFF",
      "&:active": {
        backgroundColor: "#85091110",
      },
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: state.isFocused ? "#5e627800" : "#5e627800",
      boxShadow: state.isFocused ? "#5e627850" : "#5e627850",
      "&:hover": {
        borderColor: state.isFocused ? "#5e627800" : "#5e627800",
        boxShadow: state.isFocused ? "#5e6278ac" : "#5e6278ac",
        backgroundColor: "#e4e6ef",
      },
      backgroundColor: "#f5f8fa",
      //height: 45,
      borderRadius: "0.475rem",
    }),
  };


  export const selectCustomPagination = {
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor:
        state.isSelected && state.isFocused
          ? '#DD1016'
          : state.isSelected
          ? '#DD1016'
          : state.isFocused
          ? '#fae2e8'
          : '#FFF',
      '&:active': {
        backgroundColor: '#DD1016',
        color: 'white'
      },
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: state.isFocused ? '#5e627800' : '#5e627800',
      boxShadow: state.isFocused ? '#5e627850' : '#5e627850',
      '&:hover': {
        borderColor: state.isFocused ? '#5e627800' : '#5e627800',
        boxShadow: state.isFocused ? '#5e6278ac' : '#5e6278ac',
        backgroundColor: '#e4e6ef',
      },
      backgroundColor: '#f5f8fa',
      height: 32,
      borderRadius: '3px', //0.475rem
    }),
  }