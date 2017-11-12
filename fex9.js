#include <stdio.h>

void plusMinus(int num1, int num2)
{
    int i, dbl, big, small;

if(num2 > num1)
{
    big = num2;
    small = num1;
}
else
{
    big = num1;
    small = num2;
}

for(i = small; i <= big; i++)
{
    if(i % 2 == 1)
        printf("%d\n", i);
    else
    {
        dbl = i * 2;
        dbl = i - dbl;
        printf("%d\n", dbl);
    }
}
}
int main()
{
    int num1, num2;

    printf("please enter a number:\n");
    scanf("%d %d", &num1, &num2);
    plusMinus(num1, num2);

    return 0;
}
