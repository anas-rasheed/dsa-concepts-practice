
def find_smallest_number(input_array, start_position) -> dict[str, int]:
    '''
    Find the smallest element from the input list
    '''
    min_value = input_array[start_position]
    min_index = start_position
    for index in range(start_position, len(input_array)):
        if input_array[index] < min_value:
            min_value = input_array[index]
            min_index = index
    return {'min_value': min_value, 'min_index': min_index}


def selection_sort(input_array) -> list:
    '''
    Selection sort implementation

    Time complexity - O(n^2)
    '''

    for index in range(len(input_array)):
        check_term = input_array[index]
        min_object = find_smallest_number(input_array, index)
        if min_object['min_index'] != index:
            input_array[min_object['min_index']] = check_term
            input_array[index] = min_object['min_value']
    return input_array


testArray1 = [9, 3, 4, 6, 8, 0, 1, 2]
testArray2 = [89, 13, 74, 6, 98, 30, 51, 62]

print(selection_sort(testArray1))
print(selection_sort(testArray2))
