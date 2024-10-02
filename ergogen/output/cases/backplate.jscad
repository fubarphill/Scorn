function backplate_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[278.2633538,-153.3360292],[269.6098467,-172.1954522]]).appendArc([267.1618233,-173.2594799],{"radius":2,"clockwise":true,"large":false}).appendPoint([247.8121038,-166.8346117]).appendArc([247.3626014,-166.7408975],{"radius":2,"clockwise":false,"large":false}).appendPoint([227.6963534,-164.9563352]).appendArc([227.3412998,-164.9557621],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.1687878,-166.8081168]).appendArc([205.094923,-166.6020095],{"radius":2,"clockwise":true,"large":false}).appendPoint([181.1771649,-154.5572704]).appendArc([179.8617881,-154.3872573],{"radius":2,"clockwise":false,"large":false}).appendPoint([142.3432992,-162.3620583]).appendArc([139.9632569,-160.7823853],{"radius":2,"clockwise":true,"large":false}).appendPoint([130.3574712,-110.6847877]).appendArc([131.9058667,-108.3518703],{"radius":2,"clockwise":true,"large":false}).appendPoint([151.4505425,-104.1975213]).appendArc([151.5637603,-104.1699862],{"radius":2,"clockwise":false,"large":false}).appendPoint([167.2035038,-99.8801474]).appendArc([168.6556278,-97.6775553],{"radius":2,"clockwise":false,"large":false}).appendPoint([167.8258547,-91.674176]).appendArc([169.597963,-89.4113002],{"radius":2,"clockwise":true,"large":false}).appendPoint([183.655329,-87.9338114]).appendArc([185.3863569,-86.4306387],{"radius":2,"clockwise":false,"large":false}).appendPoint([186.6308836,-81.4612382]).appendArc([188.4662965,-79.9498501],{"radius":2,"clockwise":true,"large":false}).appendPoint([207.6172868,-78.9461893]).appendArc([209.531893,-80.0924854],{"radius":2,"clockwise":true,"large":false}).appendPoint([211.5053409,-84.2898601]).appendArc([213.3152751,-85.4388971],{"radius":2,"clockwise":false,"large":false}).appendPoint([228.0059672,-85.4388971]).appendArc([229.9671285,-87.0466647],{"radius":2,"clockwise":true,"large":false}).appendPoint([230.045575,-87.438897]).appendPoint([276.445575,-87.438897]).appendArc([278.445575,-89.438897],{"radius":2,"clockwise":true,"large":false}).appendPoint([278.445575,-152.5019548]).appendArc([278.2633538,-153.3360292],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
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
)).extrude({ offset: [0, 0, 1.6] });
}




                function backplate_case_fn() {
                    

                // creating part 0 of case backplate
                let backplate__part_0 = backplate_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let backplate__part_0_bounds = backplate__part_0.getBounds();
                let backplate__part_0_x = backplate__part_0_bounds[0].x + (backplate__part_0_bounds[1].x - backplate__part_0_bounds[0].x) / 2
                let backplate__part_0_y = backplate__part_0_bounds[0].y + (backplate__part_0_bounds[1].y - backplate__part_0_bounds[0].y) / 2
                backplate__part_0 = translate([-backplate__part_0_x, -backplate__part_0_y, 0], backplate__part_0);
                backplate__part_0 = rotate([0,0,0], backplate__part_0);
                backplate__part_0 = translate([backplate__part_0_x, backplate__part_0_y, 0], backplate__part_0);

                backplate__part_0 = translate([0,0,0], backplate__part_0);
                let result = backplate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return backplate_case_fn();
            }

        