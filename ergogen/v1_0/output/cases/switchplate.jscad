function switchplate_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[278.2633538,-153.3360292],[269.6098467,-172.1954522]]).appendArc([267.1618233,-173.2594799],{"radius":2,"clockwise":true,"large":false}).appendPoint([247.8121038,-166.8346117]).appendArc([247.3626014,-166.7408975],{"radius":2,"clockwise":false,"large":false}).appendPoint([227.6963534,-164.9563352]).appendArc([227.3412998,-164.9557621],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.1687878,-166.8081168]).appendArc([205.094923,-166.6020095],{"radius":2,"clockwise":true,"large":false}).appendPoint([181.1771649,-154.5572704]).appendArc([179.8617881,-154.3872573],{"radius":2,"clockwise":false,"large":false}).appendPoint([142.3432992,-162.3620583]).appendArc([139.9632569,-160.7823853],{"radius":2,"clockwise":true,"large":false}).appendPoint([130.3574712,-110.6847877]).appendArc([131.9058667,-108.3518703],{"radius":2,"clockwise":true,"large":false}).appendPoint([151.4505425,-104.1975213]).appendArc([151.5637603,-104.1699862],{"radius":2,"clockwise":false,"large":false}).appendPoint([167.2035038,-99.8801474]).appendArc([168.6556278,-97.6775553],{"radius":2,"clockwise":false,"large":false}).appendPoint([167.8258547,-91.674176]).appendArc([169.597963,-89.4113002],{"radius":2,"clockwise":true,"large":false}).appendPoint([183.655329,-87.9338114]).appendArc([185.3863569,-86.4306387],{"radius":2,"clockwise":false,"large":false}).appendPoint([186.6308836,-81.4612382]).appendArc([188.4662965,-79.9498501],{"radius":2,"clockwise":true,"large":false}).appendPoint([207.6172868,-78.9461893]).appendArc([209.531893,-80.0924854],{"radius":2,"clockwise":true,"large":false}).appendPoint([211.5053409,-84.2898601]).appendArc([213.3152751,-85.4388971],{"radius":2,"clockwise":false,"large":false}).appendPoint([228.0059672,-85.4388971]).appendArc([229.9671285,-87.0466647],{"radius":2,"clockwise":true,"large":false}).appendPoint([230.045575,-87.438897]).appendPoint([255.545575,-87.438897]).appendArc([257.545575,-89.438897],{"radius":2,"clockwise":true,"large":false}).appendPoint([257.545575,-144.638897]).appendArc([259.545575,-146.638897],{"radius":2,"clockwise":false,"large":false}).appendPoint([276.445575,-146.638897]).appendArc([278.445575,-148.638897],{"radius":2,"clockwise":true,"large":false}).appendPoint([278.445575,-152.5019548]).appendArc([278.2633538,-153.3360292],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[200.8769659,-158.7386226],"radius":1.1})
.union(
    CAG.circle({"center":[273.6042705,-152.7584284],"radius":1.1})
).union(
    CAG.circle({"center":[252.645575,-92.938897],"radius":1.1})
).union(
    CAG.circle({"center":[157.036079,-139.8145402],"radius":1.1})
).union(
    CAG.circle({"center":[153.5015804,-123.186031],"radius":1.1})
).union(
    new CSG.Path2D([[231.1704569,-161.7112659],[244.9179437,-162.9140151]]).appendPoint([246.1206929,-149.1665283]).appendPoint([232.3732061,-147.9637791]).appendPoint([231.1704569,-161.7112659]).close().innerToCAG()
).union(
    new CSG.Path2D([[209.3732061,-162.9140151],[223.1206929,-161.7112659]]).appendPoint([221.9179437,-147.9637791]).appendPoint([208.1704569,-149.1665283]).appendPoint([209.3732061,-162.9140151]).close().innerToCAG()
).union(
    new CSG.Path2D([[252.9510677,-164.8689698],[266.0756476,-169.1334043]]).appendPoint([270.3400821,-156.0088244]).appendPoint([257.2155022,-151.7443899]).appendPoint([252.9510677,-164.8689698]).close().innerToCAG()
).union(
    new CSG.Path2D([[229.745575,-104.838897],[243.545575,-104.838897]]).appendPoint([243.545575,-91.038897]).appendPoint([229.745575,-91.038897]).appendPoint([229.745575,-104.838897]).close().innerToCAG()
).union(
    new CSG.Path2D([[229.745575,-121.838897],[243.545575,-121.838897]]).appendPoint([243.545575,-108.038897]).appendPoint([229.745575,-108.038897]).appendPoint([229.745575,-121.838897]).close().innerToCAG()
).union(
    new CSG.Path2D([[229.745575,-138.838897],[243.545575,-138.838897]]).appendPoint([243.545575,-125.038897]).appendPoint([229.745575,-125.038897]).appendPoint([229.745575,-138.838897]).close().innerToCAG()
).union(
    new CSG.Path2D([[211.7455749,-102.8388971],[225.5455749,-102.8388971]]).appendPoint([225.5455749,-89.0388971]).appendPoint([211.7455749,-89.0388971]).appendPoint([211.7455749,-102.8388971]).close().innerToCAG()
).union(
    new CSG.Path2D([[211.7455749,-119.8388971],[225.5455749,-119.8388971]]).appendPoint([225.5455749,-106.0388971]).appendPoint([211.7455749,-106.0388971]).appendPoint([211.7455749,-119.8388971]).close().innerToCAG()
).union(
    new CSG.Path2D([[211.7455749,-136.8388971],[225.5455749,-136.8388971]]).appendPoint([225.5455749,-123.0388971]).appendPoint([211.7455749,-123.0388971]).appendPoint([211.7455749,-136.8388971]).close().innerToCAG()
).union(
    new CSG.Path2D([[158.7575303,-137.8128895],[172.2559672,-134.9437082]]).appendPoint([169.3867859,-121.4452713]).appendPoint([155.888349,-124.3144526]).appendPoint([158.7575303,-137.8128895]).close().innerToCAG()
).union(
    new CSG.Path2D([[141.1508735,-141.5552999],[154.6493104,-138.6861186]]).appendPoint([151.7801291,-125.1876817]).appendPoint([138.2816922,-128.056863]).appendPoint([141.1508735,-141.5552999]).close().innerToCAG()
).union(
    new CSG.Path2D([[162.292029,-154.4413987],[175.7904659,-151.5722174]]).appendPoint([172.9212846,-138.0737805]).appendPoint([159.4228477,-140.9429618]).appendPoint([162.292029,-154.4413987]).close().innerToCAG()
).union(
    new CSG.Path2D([[155.2230316,-121.1843803],[168.7214685,-118.315199]]).appendPoint([165.8522872,-104.8167621]).appendPoint([152.3538503,-107.6859434]).appendPoint([155.2230316,-121.1843803]).close().innerToCAG()
).union(
    new CSG.Path2D([[137.6163748,-124.9267907],[151.1148117,-122.0576094]]).appendPoint([148.2456304,-108.5591725]).appendPoint([134.7471935,-111.4283538]).appendPoint([137.6163748,-124.9267907]).close().innerToCAG()
).union(
    new CSG.Path2D([[144.6853722,-158.1838091],[158.1838091,-155.3146278]]).appendPoint([155.3146278,-141.8161909]).appendPoint([141.8161909,-144.6853722]).appendPoint([144.6853722,-158.1838091]).close().innerToCAG()
).union(
    new CSG.Path2D([[192.8847546,-114.1654973],[206.6658422,-113.4432611]]).appendPoint([205.943606,-99.6621735]).appendPoint([192.1625184,-100.3844097]).appendPoint([192.8847546,-114.1654973]).close().innerToCAG()
).union(
    new CSG.Path2D([[191.9950433,-97.1887952],[205.7761309,-96.466559]]).appendPoint([205.0538947,-82.6854714]).appendPoint([191.2728071,-83.4077076]).appendPoint([191.9950433,-97.1887952]).close().innerToCAG()
).union(
    new CSG.Path2D([[193.7744659,-131.1421994],[207.5555535,-130.4199632]]).appendPoint([206.8333173,-116.6388756]).appendPoint([193.0522297,-117.3611118]).appendPoint([193.7744659,-131.1421994]).close().innerToCAG()
).union(
    new CSG.Path2D([[173.4392742,-106.5034062],[187.1636764,-105.0609134]]).appendPoint([185.7211836,-91.3365112]).appendPoint([171.9967814,-92.779004]).appendPoint([173.4392742,-106.5034062]).close().innerToCAG()
).union(
    new CSG.Path2D([[175.2162581,-123.4102784],[188.9406603,-121.9677856]]).appendPoint([187.4981675,-108.2433834]).appendPoint([173.7737653,-109.6858762]).appendPoint([175.2162581,-123.4102784]).close().innerToCAG()
).union(
    new CSG.Path2D([[176.993242,-140.3171506],[190.7176442,-138.8746578]]).appendPoint([189.2751514,-125.1502556]).appendPoint([175.5507492,-126.5927484]).appendPoint([176.993242,-140.3171506]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function switchplate_case_fn() {
                    

                // creating part 0 of case switchplate
                let switchplate__part_0 = switchplate_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let switchplate__part_0_bounds = switchplate__part_0.getBounds();
                let switchplate__part_0_x = switchplate__part_0_bounds[0].x + (switchplate__part_0_bounds[1].x - switchplate__part_0_bounds[0].x) / 2
                let switchplate__part_0_y = switchplate__part_0_bounds[0].y + (switchplate__part_0_bounds[1].y - switchplate__part_0_bounds[0].y) / 2
                switchplate__part_0 = translate([-switchplate__part_0_x, -switchplate__part_0_y, 0], switchplate__part_0);
                switchplate__part_0 = rotate([0,0,0], switchplate__part_0);
                switchplate__part_0 = translate([switchplate__part_0_x, switchplate__part_0_y, 0], switchplate__part_0);

                switchplate__part_0 = translate([0,0,0], switchplate__part_0);
                let result = switchplate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchplate_case_fn();
            }

        