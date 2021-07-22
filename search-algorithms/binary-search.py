def binary_search(sorted_input_array, search_item):
    '''
    Binary Search Implementation

    Time complexity - O(log n)

    Searches the input searchItem from a sorted array

    Parameters
    ----------
    sorted_input_array : list of int
        Sorted input array `sorted_input_array`
    search_item : int
        Number to be searched `search_item`

    Returns
    -------
    Index of the search_item in sorted_input_array
    '''
    low = 0
    high = len(sorted_input_array)-1
    while(low <= high):
        mid = (low+high)//2
        mid_term = sorted_input_array[mid]
        if(mid_term == search_item):
            return mid
        elif(mid_term < search_item):
            low = mid+1
        elif(mid_term > search_item):
            high = mid-1


test_array1 = [2, 3, 6, 7, 8, 12, 56]
test_array2 = [12, 33, 46, 47, 58, 62, 86]

print(binary_search(test_array1, 8))
print(binary_search(test_array2, 33))
