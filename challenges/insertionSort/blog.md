
### Example 0

## [8,4,23,42,16,15]

FOR LOOP (i=1 to 6)
1) i=1 j=0 temp = 4 

    WHILE (j(0) >= 0) && (temp(4) < arr[0](8))
    - arr[1] = arr[0], j-=1
                            //[8,8,23,42,16,15]
    WHILE (j(-1) >= 0) && (temp(4) < arr[-1](20))
    - break

    arr[0] = temp (4)

    result: [4,8,23,42,16,15] //at the end of first LOOP

2) i=2 j=1 temp = 23 

    WHILE (j(1) >= 0) && (temp(23) < arr[1](8))
    - break

    arr[2] = temp (23)

    result: [4,8,23,42,16,15] //at the end of second LOOP

3) i=3 j=2 temp = 42 

    WHILE (j(3) >= 0) && (temp(42) < arr[2](23))
    - break

    arr[3] = temp (42)

    result: [4,8,23,42,16,15] //at the end of third LOOP

4) i=4 j=3 temp = 16 

    WHILE (j(3) >= 0) && (temp(16) < arr[3](42))
    - arr[4] = arr[3], j-=1
                            //[4,8,23,42,42,15]
    WHILE (j(2) >= 0) && (temp(16) < arr[2](23))
    - arr[3] = arr[2], j-=1
                            //[4,8,23,23,42,15]
    WHILE (j(1) >= 0) && (temp(16) < arr[1](8))
    - break

    arr[2] = temp (16)

    result: [4,8,16,23,42,15] //at the end of fourth LOOP

5) i=5 j=4 temp = 15 

    WHILE (j(4) >= 0) && (temp(15) < arr[4](42))
    - arr[5] = arr[4], j-=1
                            //[4,8,16,23,42,42]
    WHILE (j(3) >= 0) && (temp(15) < arr[3](23))
    - arr[4] = arr[3], j-=1
                            //[4,8,16,23,23,42]
    WHILE (j(2) >= 0) && (temp(15) < arr[2](16))
    - arr[3] = arr[2], j-=1
                            //[4,8,16,16,23,42]
    WHILE (j(1)>=0) && (temp(15) < arr[1](8))
    - break

    arr[2] = temp (15)

    result: [4,8,15,16,23,42] //at the end of fifth LOOP

6) i=6
--break

RETURN: [4,8,15,16,23,42]

### Example 1 
 
## [20,18,12,8,5,-2]


FOR LOOP (i=1 to 6)
1) i=1 j=0 temp = 18 

    WHILE (j(0) >= 0) && (temp(18) < arr[0](20))
    - arr[1] = arr[0], j=-1
    WHILE (j(-1) >= 0) && (temp(18) < arr[-1](20))
    - break

    arr[0] = temp (18)

    result: [18,20,12,8,5,-2] //at the end of first LOOP

2) i=2 j=1 temp=12

    WHILE (j(1) >= 0) && (temp(12) < arr[1](20))
    - arr[2] = arr[1](20), j=0
                                //[18,20,20,8,5,-2]
    WHILE (j(0)>=0) && (temp(12)< arr[0](18))
    - arr[1] = arr[0](18), j=-1
                                //[18,18,20,8,5,-2]
    WHILE (j(-1) >= 0) && (temp(12) < arr[-1])
    - break

    arr[0] = 12

    result : [12, 18,20,8,5,-2]

3) i=3 j=2 temp=8

    WHILE (j(2) >= 0) && (temp(8) < arr[2](20))
    - arr[3] = arr[2](20), j=1
                                //[12,18,20,20,5,-2]
    WHILE (j(1) >= 0) && (temp(8) < arr[1](18))
    - arr[2] = arr[1](18), j=0
                                //[12,18,18,20,5,-2]
    WHILE (j(0) >= 0) && (temp(8) < arr[1](18))
    - arr[1] = arr[0](12), j=-1
                                //[12,12,18,20,5,-2]
    WHILE (j(-1) >= 0) && (temp(8) < arr[-1])
    - break

    arr[0] = 8

    result: [8,12,18,20,5,-2]

4) i=4 j=3 temp=5

    WHILE (j(3) >= 0) && (temp(5) < arr[3](20))
    - arr[4] = arr[3](20), j=2
                                //[8,12,18,20,20,-2]
    WHILE (j(2) >= 0) && (temp(5) < arr[2](20))
    - arr[3] = arr[2](18), j=1
                                //[8,12,18,18,20,-2]
    WHILE (j(1) >= 0) && (temp(5) < arr[1](18))
    - arr[2] = arr[1](12), j=0
                                //[8,12,12,18,20,-2]
    WHILE (j(0) >= 0) && (temp(5) < arr[1](18))
    - arr[1] = arr[0](8), j=-1
                                //[8,8,12,18,20,-2]
    WHILE (j(-1) >= 0) && (temp(5) < arr[-1])
    - break

    arr[0] = 5

    result: [5,8,12,18,20,-2]

5) i=5 j=4 temp=-2

    WHILE (j(4) >= 0) && (temp(-2) < arr[4](20)))
    - arr[5] = arr[4](20), j=3
                                //[5,8,12,18,20,20]
    WHILE (j(3) >= 0) && (temp(-2) < arr[3](18)))
    - arr[4] = arr[3](20), j=2
                                //[5,8,12,18,18,20]
    WHILE (j(2) >= 0) && (temp(-2) < arr[2](12)))
    - arr[3] = arr[2](18), j=1
                                //[5,8,12,12,18,20]
    WHILE (j(1) >= 0) && (temp(-2) < arr[1](8)))
    - arr[2] = arr[1](12), j=0
                                //[5,8,8,12,18,20]
    WHILE (j(0) >= 0) && (temp(-2) < arr[1](5)))
    - arr[1] = arr[0](8), j=-1
                                //[5,5,8,12,18,20]
    WHILE (j(-1) >= 0) && (temp(-2) < arr[-1])
    - break

    arr[0] = -2

    result: [-2,5,8,12,18,20]

6) i=6
--break

RETURN: [-2,5,8,12,18,20]


### Example 2 
 
## [5,12,7,5,5,7]


FOR LOOP (i=1 to 6)
1) i=1 j=0 temp =  12
    WHILE (j(0) >= 0) && (temp(12) < arr[0](5))
    - break

    arr[1] = temp (12)

    result: [5,12,7,5,5,7] //at the end of first LOOP

2) i=2 j=1 temp =  7
    WHILE (j(1) >= 0) && (temp(7) < arr[1](12))
    - arr[2] = arr[1], j=0
                            //[5,12,12,5,5,7]
    WHILE (j(0) >= 0) && (temp(7) < arr[0](5))
    - break
    arr[1] = temp (7)

    result: [5,7,12,5,5,7] //at the end of second LOOP

3) i=3 j=2 temp =  5
    WHILE (j(2) >= 0) && (temp(5) < arr[2](12))
    - arr[3] = arr[2], j=1
                            //[5,7,12,12,5,7]
    WHILE (j(1) >= 0) && (temp(5) < arr[1](7))
    - arr[2] = arr[1], j=0
                            //[5,7,7,12,5,7]
    WHILE (j(0) >= 0) && (temp(5) < arr[0](5))
    - break
    arr[1] = temp (5)

    result: [5,5,7,12,5,7] //at the end of third LOOP

4) i=4 j=3 temp =  5
    WHILE (j(3) >= 0) && (temp(5) < arr[3](12))
    - arr[4] = arr[3], j=2
                            //[5,5,7,12,12,7]
    WHILE (j(2) >= 0) && (temp(5) < arr[2](7))
    - arr[3] = arr[2], j=1
                            //[5,5,7,7,12,7]
    WHILE (j(1) >= 0) && (temp(5) < arr[1](5))
    - break
  
    arr[2] = temp (5)
    result: [5,5,5,7,12,7] //at the end of fourth LOOP

5) i=5 j=4 temp =  7
    WHILE (j(4) >= 0) && (temp(7) < arr[4](12))
    - arr[5] = arr[4], j=3
                            //[5,5,5,7,12,12]
    WHILE (j(3) >= 0) && (temp(7) < arr[3](7))
    - break

    arr[4] = temp (7)

    result: [5,5,5,7,7,12] //at the end of fifth LOOP

6) i=6
--break

RETURN: [5,5,5,7,7,12]

### Example 3 
 
## [2,3,5,7,13,11]

FOR LOOP (i=1 to 6)
1) i=1 j=0 temp = 3
    WHILE (j(0) >= 0) && (temp(3) < arr[0](2))
    - break

    arr[1] = temp (3)

    result: [2,3,5,7,13,11] //at the end of first LOOP

2) i=2 j=1 temp = 5
    WHILE (j(1) >= 0) && (temp(5) < arr[1](3))
    - break

    arr[2] = temp (5)

    result: [2,3,5,7,13,11] //at the end of second LOOP

3) i=3 j=2 temp = 7
    WHILE (j(2) >= 0) && (temp(7) < arr[2](7))
    - break

    arr[3] = temp (7)

    result: [2,3,5,7,13,11] //at the end of third LOOP

4) i=4 j=3 temp = 13
    WHILE (j(3) >= 0) && (temp(13) < arr[3](7))
    - break

    arr[4] = temp (13)

    result: [2,3,5,7,13,11] //at the end of fourth LOOP

5) i=5 j=4 temp = 11
    WHILE (j(4) >= 0) && (temp(11) < arr[4](13))
    - arr[5] = arr[4], j=3
                            //[2,3,5,7,13,13]
    WHILE (j(3) >= 0) && (temp(11) < arr[3](7))
    - break

    arr[4] = temp (13)

    result: [2,3,5,7,11,13] //at the end of fifth LOOP

6) i=6
--break

RETURN: [2,3,5,7,11,13]