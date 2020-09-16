export const getters = {
  filteredData: state => {
    return (state.data || []).filter(d => !!d);
  }
};

export default getters;
