#include <stdio.h>
#include <cs50.h>
#include <math.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

// For data entry
typedef struct
{
    string name;
    int value;
}
list;
const int ITEMS = 15;

int menu(void);

// Credit
void credit(int final_p);

// Cash
void cash(int);

int get_rupee(int final_p);
int calculate_500(int rupee);
int calculate_200(int rupee);
int calculate_100(int rupee);
int calculate_50(int rupee);
int calculate_20(int rupee);
int calculate_10(int rupee);
int calculate_5(int rupee);
int calculate_2(int rupee);
int calculate_1(int rupee);

// Final bill
list bill_p[ITEMS * 100];
void printBill(int final_p);
int j = 0;


int main (void)
{
    printf("\n");

    int final_p = menu();

    string method = get_string("How would you like to pay? (cash or credit): ");

    if (strcmp(method, "Credit") == 0 || strcmp(method, "credit") == 0)
    {
        credit(final_p);
    }
    else if (strcmp(method, "cash") == 0 || strcmp(method, "Cash") == 0)
    {
        cash(final_p);
    }

    printBill(final_p);
}

// ---------------------- Entering items -------------------------------------

int menu()
{
    list bill[ITEMS];   // To store available items

    bill[0].name = "pen"; bill[0].value = 10;
    bill[1].name = "paper"; bill[1].value = 2;
    bill[2].name = "pencil"; bill[2].value = 5;
    bill[3].name = "pouch"; bill[3].value = 75;
    bill[4].name = "eraser"; bill[4].value = 10;
    bill[5].name = "marker"; bill[5].value = 15;
    bill[6].name = "graph"; bill[6].value = 5;
    bill[7].name = "ink"; bill[7].value = 40;
    bill[8].name = "calc"; bill[8].value = 150;
    bill[9].name = "glue"; bill[9].value = 25;
    bill[10].name = "tape"; bill[10].value = 27;
    bill[11].name = "notes"; bill[11].value = 80;
    bill[12].name = "holder"; bill[12].value = 30;
    bill[13].name = "lead"; bill[13].value = 20;
    bill[14].name = "skybag"; bill[14].value = 750;

    string item;
    int price = 0;

    do
    {
        item = get_string("item name: ");
        for (int i = 0; i < strlen(item); i++)
        {
            item[i] = tolower(item[i]);
        }

        for (int i = 0; i < ITEMS; i++)
        {
            if (strcmp(item, bill[i].name) == 0)
            {
                price = price + bill[i].value;
                bill_p[j].name = bill[i].name;
                bill_p[j].value = bill[i].value;
                j++;
            }
        }
    }
    while(strcmp(item, "end") != 0);
    printf("Total bill: %d\n\n", price);
    return price;
}

// --------------------- CREDIT ---------------------------------------

void credit (int final_p)
{
    // Asks for input
    do
    {
        long input = get_long("\nEnter credit card number: ");

        bool r = false;
        int product;
        int sum1 = 0;
        int sum2 = 0;
        int d = 0;
        long credit = input;

        // Saparate digits
        while (credit > 0)
        {
            // For odd digits,
            if (r == true)
            {
                int odd = credit % 10;

                // Multiply by 2
                product = odd * 2;

                // Separate them and add
                while (product > 0)
                {
                    int sep = product % 10;
                    sum1 = sum1 + sep;
                    product = product / 10;
                }
            }

            // For even digits,
            if (r == false)
            {
                //Add them
                int even = credit % 10;
                sum2 = sum2 + even;
            }

            credit = credit / 10;
            r = !r;
            d++;        // Counts digits
        }

        // Add (multiply by 2) and (add them)
        int sum = sum1 + sum2;

        // Get first two and last digit
        int last_digit = sum % 10;
        int first_two = input / pow(10, d - 2);
        int first_one = input / pow(10, d - 1);

        // Prints the card type
        if ((first_two == 34 || first_two == 37) && (d == 15) && (last_digit == 0))
        {
            printf("AMEX\n");
            printf("Amount %d has been paid.\n", final_p);
            return;
        }
        else if ((d == 16) && (50 < first_two && first_two < 56) && (last_digit == 0))
        {
            printf("MASTERCARD\n");
            printf("Amount %d has been paid.\n", final_p);
            return;
        }
        else if ((d == 13 || d == 16) && (first_one == 4) && (last_digit == 0))
        {
            printf("VISA\n");
            printf("Amount %d has been paid.\n", final_p);
            return;
        }
        else
        {
            printf("INVALID\n");
            printf("Please enter valid number.\n");
        }
    }
    while(true);
}

// ----------------------------------------------- CASH ------------------------------------------------

void cash (int final_p)
{
    int rupee = get_rupee(final_p);

    int r500 = calculate_500(rupee);
    rupee = rupee - r500 * 500;

    int r200 = calculate_200(rupee);
    rupee = rupee - r200 * 200;

    int r100 = calculate_100(rupee);
    rupee = rupee - r100 * 100;

    int r50 = calculate_50(rupee);
    rupee = rupee - r50 * 50;

    int r20 = calculate_20(rupee);
    rupee = rupee - r20 * 20;

    int r10 = calculate_10(rupee);
    rupee = rupee - r10 * 10;

    int r5 = calculate_5(rupee);
    rupee = rupee - r5 * 5;

    int r2 = calculate_2(rupee);
    rupee = rupee - r2 * 2;

    int r1 = calculate_1(rupee);
    rupee = rupee - r1 * 1;

    printf("\n");

    int coins = r500 + r200 + r100 + r50 + r20 + r10 + r5 + r2 + r1;

    printf("Cash counter will return %i (coins + notes)\n", coins);

    // 500----------------------------------
    for (int i = 0; i < r500; i++)
    {
        printf("500 ");
    }
    if (r500 != 0)
    {
        printf("\n");
    }

    // 200----------------------------------
    for (int i = 0; i < r200; i++)
    {
        printf("200 ");
    }
    if (r200 != 0)
    {
        printf("\n");
    }

    // 100----------------------------------
    for (int i = 0; i < r100; i++)
    {
        printf("100 ");
    }
    if (r100 != 0)
    {
        printf("\n");
    }

    // 50----------------------------------
    for (int i = 0; i < r50; i++)
    {
        printf("50 ");
    }
    if (r50 != 0)
    {
        printf("\n");
    }

    // 20----------------------------------
    for (int i = 0; i < r20; i++)
    {
        printf("20 ");
    }
    if (r20 != 0)
    {
        printf("\n");
    }

    // 10----------------------------------
    for (int i = 0; i < r10; i++)
    {
        printf("10 ");
    }
    if (r10 != 0)
    {
        printf("\n");
    }

    // 5----------------------------------
    for (int i = 0; i < r5; i++)
    {
        printf("5 ");
    }
    if (r5 != 0)
    {
        printf("\n");
    }

    // 2----------------------------------
    for (int i = 0; i < r2; i++)
    {
        printf("2 ");
    }
    if (r2 != 0)
    {
        printf("\n");
    }

    // 1----------------------------------
    for (int i = 0; i < r1; i++)
    {
        printf("1 ");
    }
    if (r1 != 0)
    {
        printf("\n");
    }
}

int get_rupee(int final_p)
{
    int n;
    do
    {
        int a = get_int("Amount paid: ");
        n = a - final_p;
    }
    while(n < 0);
    return n;
}

int calculate_500(int rupee)
{
    int n = 0;
    int x = 0;

    while ((n + 500) <= rupee)
    {
        n = n + 500;
        x++;
    }
    return x;
}

int calculate_200(int rupee)
{
    int n = 0;
    int x = 0;

    while ((n + 200) <= rupee)
    {
        n = n + 200;
        x++;
    }
    return x;
}

int calculate_100(int rupee)
{
    int n = 0;
    int x = 0;

    while ((n + 100) <= rupee)
    {
        n = n + 100;
        x++;
    }
    return x;
}

int calculate_50(int rupee)
{
    int n = 0;
    int x = 0;

    while ((n + 50) <= rupee)
    {
        n = n + 50;
        x++;
    }
    return x;
}

int calculate_20(int rupee)
{
    int n = 0;
    int x = 0;

    while ((n + 20) <= rupee)
    {
        n = n + 20;
        x++;
    }
    return x;
}

int calculate_10(int rupee)
{
    int n = 0;
    int x = 0;

    while ((n + 10) <= rupee)
    {
        n = n + 10;
        x++;
    }
    return x;
}

int calculate_5(int rupee)
{
    int n = 0;
    int x = 0;

    while ((n + 5) <= rupee)
    {
        n = n + 5;
        x++;
    }
    return x;
}

int calculate_2(int rupee)
{
    int n = 0;
    int x = 0;

    while ((n + 2) <= rupee)
    {
        n = n + 2;
        x++;
    }
    return x;
}

int calculate_1(int rupee)
{
    int n = 0;
    int x = 0;

    while ((n + 1) <= rupee)
    {
        n = n + 1;
        x++;
    }
    return x;
}

// ---------------------------------- PRINT BILL ----------------------------

void printBill(int final_p)
{
    printf("\n");
    printf("\n");
    printf("________________________\n");
    printf("Item:\t\tPrice\n");
    printf("\n");

    for (int i = 0; i < j; i++)
    {
        if (bill_p[i].name != NULL && bill_p[i].value != 0)
        {
            printf("%s:\t\t%d\n", bill_p[i].name, bill_p[i].value);
        }
    }
    printf("\n");
    printf("Total:\t\t%d\n", final_p);
    printf("________________________\n");
    printf("\n");
    printf("\n");
}
