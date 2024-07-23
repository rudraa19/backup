# Scrabble

---

### Background

In the game of Scrabble, players create words to score points, and the number of points is the sum of the point values of each letter in the word.

| A  | B  | C  | D  | E  | F  | G  | H  | I  | J  | K  | L  | M  | N  | O  | P  | Q  | R  | S  | T  | U  | V  | W  | X  | Y  | Z  |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 1  | 3  | 3  | 2  | 1  | 4  | 2  | 4  | 1  | 8  | 5  | 1  | 3  | 1  | 1  | 3  | 10 | 1  | 1  | 1  | 1  | 4  | 4  | 8  | 4  | 10 |


For example, if we wanted to score the word <span isCode>Code</span>, we would note that in general Scrabble rules, the <span isCode>C</span> is worth <span isCode>3</span> points, the <span isCode>o</span> is worth <span isCode>1</span> point, the <span isCode>d</span> is worth <span isCode>2</span> points, and the <span isCode>e</span> is worth <span isCode>1</span> point. Summing these, we get that <span isCode>Code</span> is worth <span isCode> 3 + 1 + 2 + 1 = 7</span> points.

<br/>

### Sample input output

<code>
Player 1: Question?
Player 2: Question!
Tie!
</code>

<code>
Player 1: Oh,
Player 2: hai!
Player 2 wins!
</code>

<code>
Player 1: COMPUTER
Player 2: science
Player 1 wins!
</code>

<code>
Player 1: Scrabble
Player 2: wiNNeR
Player 1 wins!
</code>

<br/>

### Sourse code

<pre><code language='c'>
\#include \<ctype.h\>
\#include \<stdio.h\>
\#include \<string.h\>

int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};

int compute_score(char word[]);

int main(void)
{
    char word1[50], word2[50];
    printf("Player 1: ");
    scanf("%s", word1);
    printf("Player 2: ");
    scanf("%s", word2);

    int score1 = compute_score(word1);
    int score2 = compute_score(word2);

    if (score1 > score2)
    {
        printf("Player 1 wins!\n");
    }
    else if (score1 < score2)
    {
        printf("Player 2 wins!\n");
    }
    else
    {
        printf("Tie!\n");
    }
}

int compute_score(char word[])
{
    for (int i = 0; i < strlen(word); i++)
    {
        word[i] = toupper(word[i]);
    }

    int score = 0;
    for (int j = 0; j < strlen(word); j++)
    {
        if (isalpha(word[j]))
        {
            score += POINTS[word[j] - 'A'];
        }
    }
    return score;
}
</code></pre>
<br />

### References

<u>[CS50x](https://cs50.harvard.edu/x/)</u>
<br />
<u>[CS50 Lab 2: Scrabble](https://cs50.harvard.edu/x/2023/labs/2/)</u>