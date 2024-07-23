#include <iostream>
#include <fstream>
#include <sstream>
#include <ios>
#include <limits>
#include <vector>
using namespace std;
#define DEPTS 6

struct dept {
    string name;
    int maxRank = 0;
};

class myInfo {
    public:
    string name;
    string email;
    int mob;
    int rank;
};

struct dept adit[DEPTS];
myInfo s1;
ifstream ip("data.csv");
fstream sd("sdata.csv", ios::app);

void checkDept(){
    for (int i = 0; i < DEPTS; i++) {
        getline(ip, adit[i].name, ',');
        string temp;
        getline(ip, temp, '\n');
        adit[i].maxRank = stoi(temp);
    }

    cout << "Enter your ACPC rank: "; cin >> s1.rank;

    for (int i = 0; i < DEPTS; i++) {
        if (s1.rank <= adit[i].maxRank) {cout << i+1 << ". " << adit[i].name << endl;}
    }
}


void regist() {
    cout << "---------- ADIT ADMISSION FORM-----------------" << endl;

    cout << "Enter your name: "; cin.ignore(); getline(cin, s1.name);
    cout << "Enter your Email: "; cin >> s1.email;
    cout << "Enter your mobile number: "; cin >> s1.mob;
    cin.clear();
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
}

void chooseBranch() {
    int index;
    cout << endl << endl;
    cout << "Select the department you want to join in:" << endl;
    for (int i = 0; i < DEPTS; i++) {
        if (s1.rank <= adit[i].maxRank) {
            cout << i+1 << ". " << adit[i].name << endl;
        }
    }
    
    cout << "Enter your choice: ";
    cin >> index;

    while (index <= 0 || index > DEPTS) {
        cout << "Invalid option! Please choose a valid department." << endl;
        cout << "Enter your choice: ";
        cin >> index;
    }

    if (adit[index-1].maxRank < s1.rank) {
        cout << "You are not eligible for that department." << endl;
        chooseBranch(); // Call the function again
        return;
    }

    cout << "Congratulations!!! You have successfully registered for getting admission in ADIT" << endl << endl;
    sd << endl << s1.name << "," << s1.email << "," << s1.mob << "," << s1.rank<< "," << adit[index-1].name;
}


int main() {

    cout << endl << endl <<  "------------------ ADIT ADMISSION MANAGEMENT SYSTEM ----------------------" << endl;

    checkDept();

    char choice;

    cout << "Do you want to proceed?(y/n): "; cin >> choice;

    if (choice == 'Y' || choice == 'y') {regist(); chooseBranch();}
    else {
        cout << "Thank you! Best of luck for your future";
    }

    return 0;
}