/**
* Decides if a point at a specific location is filled or not.  This works by iteration first checking if
* the pixel is unfilled in successively larger squares or cannot be in the center of any larger square.
* @param x is the x coordinate of the point being checked with zero being the first pixel
* @param y is the y coordinate of the point being checked with zero being the first pixel
* @return 1 if it is to be filled or 0 if it is open
*/
int isSierpinskiCarpetPixelFilled(int x, int y)
{
    while(x>0 || y>0) // when either of these reaches zero the pixel is determined to be on the edge
                               // at that square level and must be filled
    {
        if(x%3==1 && y%3==1) //checks if the pixel is in the center for the current square level
            return 0;
        x /= 3; //x and y are decremented to check the next larger square level
        y /= 3;
    }
    return 1; // if all possible square levels are checked and the pixel is not determined
                   // to be open it must be filled
}

int main
{
  do isSierpinskiCarpetPixelFilled;
}
