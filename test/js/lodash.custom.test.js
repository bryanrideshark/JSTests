var assert = chai.assert,
	expect = chai.expect,
	should = chai.should();

	//Set up Chai for our BDD.
$(document).ready(function(){



	describe("Lodash.custom", function()
	{
		describe("extendDeep()", function(){
			it("should merge a{a,b:{x},c} into b{b:{y}} with a result of a{a,b:{x,y},c}", function(){
			// Set up the test case
				var a = {
					a:true,
					b:{
						x:2
					},
					c:"String"
				};

				var b = {
					b:{
						y:"Fifteen"
					}
				};
			// Run the function
				var answer = _.extendDeep(b, a);

			// Test to ensure the answer is as expected
				assert.equal(answer.a, true);
				assert.equal(answer.b.x, 2);
				assert.equal(answer.b.y, "Fifteen");
				assert.equal(answer.c, "String");
			});


			it("should merge a{a,b:{x},c} and c{b:{z}} into b{b:{y}} with a result of a{a,b:{x,y,z},c}", function(){

				// Set up the test case
					var a = {
						a:true,
						b:{
							x:2
						},
						c:"String"
					};

					var c = {
						b:{
							z:'falsePlz'
						}
					}

					var b = {
						b:{
							y:"Fifteen"
						}
					};

				// Run the function
					var answer = _.extendDeep(b, a, c);

				// Test to ensure the answer is as expected
					assert.equal(answer.a, true);
					assert.equal(answer.b.x, 2);
					assert.equal(answer.b.y, "Fifteen");
					assert.equal(answer.b.z, "falsePlz");
					assert.equal(answer.c, "String");

			});

			it("should work with plain arrays containing nested objects", function(){

				// Set up the test case
					var a = [
					{a:1},
					3,
					5,
					6
					];

					var b = [
					{b:2},
					5
					];


				// Run the function
					var answer = _.extendDeep(b, a);

				// Test to ensure the answer is as expected
					assert.equal(answer[0].a, 1);
					assert.equal(answer[0].b, 2);
					assert.equal(answer[1], 3);
					assert.equal(answer[2], 5);
					assert.equal(answer[3], 6);

			});

			it("should work recursively a few levels down", function(){

				// Set up the test case
					var a = {
						a:{
							b:{
								c:{
									d:5
								}
							}
						}
					};

					var b = {
						a:
						{
							b:
							{
								c:
								{
									e:1
								}
							}
						}
					};


				// Run the function
					var answer = _.extendDeep(b, a);

				// Test to ensure the answer is as expected
					assert.equal(answer.a.b.c.d, 5);
					assert.equal(answer.a.b.c.e, 1);


			});

			it("should work recursively a few levels down using multiple inputs", function(){

				// Set up the test case
					var a = {
						a:{
							b:{
								c:{
									d:5
								}
							}
						}
					};

					var b = {
						a:
						{
							b:
							{
								c:
								{
									e:1
								}
							}
						}
					};

					var c = {
						a:
						{
							b:
							{
								c:
								{
									f:22
								}
							}
						}
					};
					var d = {
						a:
						{
							b:
							{
								c:
								{
									g:21
								}
							}
						}
					};


				// Run the function
					var answer = _.extendDeep(b, a, c, d);

				// Test to ensure the answer is as expected
					assert.equal(answer.a.b.c.d, 5);
					assert.equal(answer.a.b.c.e, 1);
					assert.equal(answer.a.b.c.f, 22);
					assert.equal(answer.a.b.c.g, 21);
					

			});

			
		});
	});
});