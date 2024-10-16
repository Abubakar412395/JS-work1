// CHAPTER 1

// def power(a, b):
//     return a ** b

// # Example usage:
// result = power(2, 3)  # 2 raised to the power of 3
// print(result)  # Output: 8


// CHAPTER 2


// def is_leap_year(year):
//     if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
//         return True
//     else:
//         return False

// # Example usage:
// year = 2020
// if is_leap_year(year):
//     print(f"{year} is a leap year.")
// else:
//     print(f"{year} is not a leap year.")


// CHAPTER 3


//     def calculate_s(a, b, c):
//     """Calculate the semi-perimeter of the triangle."""
//     return (a + b + c) / 2

// def calculate_area(a, b, c):
//     """Calculate the area of the triangle using the semi-perimeter."""
//     S = calculate_s(a, b, c)
//     area = (S * (S - a) * (S - b) * (S - c)) ** 0.5  # Using Heron's formula
//     return area

// # Example usage:
// a = 5
// b = 6
// c = 7
// area = calculate_area(a, b, c)
// print(f"The area of the triangle with sides {a}, {b}, and {c} is: {area:.2f}")




// CHAPTER 4


// def calculate_average(marks):
//     """Calculate the average of the marks."""
//     return sum(marks) / len(marks)

// def calculate_percentage(marks):
//     """Calculate the percentage of the marks."""
//     total_marks = sum(marks)
//     return (total_marks / (len(marks) * 100)) * 100

// def mainFunction():
//     """Main function to get marks and display average and percentage."""
//     marks = []
//     for i in range(3):
//         mark = float(input(f"Enter marks for subject {i + 1}: "))
//         marks.append(mark)

//     average = calculate_average(marks)
//     percentage = calculate_percentage(marks)

//     print(f"The average marks are: {average:.2f}")
//     print(f"The percentage is: {percentage:.2f}%")

// # Example usage
// mainFunction()




// CHAPTER 5


// def custom_index_of(string, char):
//     """Return the index of the first occurrence of char in string, or -1 if not found."""
//     for index in range(len(string)):
//         if string[index] == char:
//             return index
//     return -1

// # Example usage:
// text = "Hello, world!"
// character = 'o'
// index = custom_index_of(text, character)

// if index != -1:
//     print(f"The character '{character}' is found at index: {index}")
// else:
//     print(f"The character '{character}' is not found in the string.")



// CHAPTER 6

//     def remove_vowels(sentence):
//     """Remove all vowels from the input sentence."""
//     vowels = 'aeiouAEIOU'
//     result = ''.join(char for char in sentence if char not in vowels)
//     return result

// # Example usage:
// sentence = "Hello, how are you?"
// modified_sentence = remove_vowels(sentence)
// print(f"Original sentence: {sentence}")
// print(f"Sentence without vowels: {modified_sentence}")


// CHAPTER 7

// def count_double_vowels(sentence):
//     """Count occurrences of two successive vowels in the input sentence."""
//     vowels = 'aeiouAEIOU'
//     count = 0
//     double_vowels = []

//     for i in range(len(sentence) - 1):
//         if sentence[i] in vowels and sentence[i + 1] in vowels:
//             count += 1
//             double_vowels.append(sentence[i:i + 2])

//     return count, double_vowels

// # Example usage:
// text = "Pleases read this application and give me gratuity"
// double_vowel_count, found_vowels = count_double_vowels(text)

// print(f"The number of occurrences of two successive vowels is: {double_vowel_count}")
// print(f"Found occurrences: {', '.join(found_vowels)}")




// CHAPTER 8

// def km_to_meters(km):
//     """Convert kilometers to meters."""
//     return km * 1000

// def km_to_feet(km):
//     """Convert kilometers to feet."""
//     return km * 3280.84

// def km_to_inches(km):
//     """Convert kilometers to inches."""
//     return km * 39370.1

// def km_to_centimeters(km):
//     """Convert kilometers to centimeters."""
//     return km * 100000

// def main():
//     """Main function to get input and display conversions."""
//     km = float(input("Enter the distance in kilometers: "))
    
//     meters = km_to_meters(km)
//     feet = km_to_feet(km)
//     inches = km_to_inches(km)
//     centimeters = km_to_centimeters(km)

//     print(f"Distance in meters: {meters:.2f} m")
//     print(f"Distance in feet: {feet:.2f} ft")
//     print(f"Distance in inches: {inches:.2f} in")
//     print(f"Distance in centimeters: {centimeters:.2f} cm")

// # Example usage
// main()









// CHAPTER 9

// def calculate_overtime_pay(hours_worked):
//     """Calculate overtime pay for employees."""
//     overtime_rate = 12.00  # Overtime rate per hour
//     standard_hours = 40     # Standard hours in a week

//     if hours_worked > standard_hours:
//         overtime_hours = hours_worked - standard_hours
//         overtime_pay = overtime_hours * overtime_rate
//     else:
//         overtime_pay = 0.00

//     return overtime_pay

// def main():
//     """Main function to get input and display overtime pay."""
//     hours_worked = int(input("Enter the total hours worked by the employee: "))

//     overtime_pay = calculate_overtime_pay(hours_worked)

//     print(f"Overtime pay for {hours_worked} hours worked is: Rs. {overtime_pay:.2f}")

// # Example usage
// main()









// CHAPTER 10

// def calculate_notes(amount):
//     """Calculate the number of notes of each denomination needed for the given amount."""
//     notes_100 = amount // 100
//     amount %= 100

//     notes_50 = amount // 50
//     amount %= 50

//     notes_10 = amount // 10
//     amount %= 10

//     return notes_100, notes_50, notes_10

// def main():
//     """Main function to get input and display the number of notes."""
//     amount = int(input("Enter the amount to be withdrawn (in hundreds): ")) * 100

//     notes_100, notes_50, notes_10 = calculate_notes(amount)

//     print(f"Number of 100 notes: {notes_100}")
//     print(f"Number of 50 notes: {notes_50}")
//     print(f"Number of 10 notes: {notes_10}")

// # Example usage
// main()
