export function filterData(searchText,allRestros){
    const filterData = allRestros.filter(item =>  item?.data?.name?.toLowerCase().includes(searchText.toLowerCase()))
    return filterData;
}

