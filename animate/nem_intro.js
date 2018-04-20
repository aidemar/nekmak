(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"nem_intro_atlas_", frames: [[0,925,373,148],[0,0,1191,854],[570,1070,93,77],[702,925,130,117],[0,1075,139,208],[141,1075,172,117],[375,925,193,162],[944,856,210,286],[834,1035,93,99],[570,925,130,143],[834,1136,93,99],[702,1044,130,110],[834,925,93,108],[0,856,942,67]]}
];


// symbols:



(lib.LogoNemak = function() {
	this.spriteSheet = ss["nem_intro_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Nemak_fondo = function() {
	this.spriteSheet = ss["nem_intro_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NEMAK_pza_01 = function() {
	this.spriteSheet = ss["nem_intro_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NEMAK_pza_02 = function() {
	this.spriteSheet = ss["nem_intro_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NEMAK_pza_03 = function() {
	this.spriteSheet = ss["nem_intro_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NEMAK_pza_04 = function() {
	this.spriteSheet = ss["nem_intro_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NEMAK_pza_05 = function() {
	this.spriteSheet = ss["nem_intro_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.NEMAK_pza_07 = function() {
	this.spriteSheet = ss["nem_intro_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.NEMAK_pza_09 = function() {
	this.spriteSheet = ss["nem_intro_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.NEMAK_pza_10 = function() {
	this.spriteSheet = ss["nem_intro_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.NEMAK_pza_13 = function() {
	this.spriteSheet = ss["nem_intro_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.NEMAK_pza_15 = function() {
	this.spriteSheet = ss["nem_intro_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.NEMAK_pza_16 = function() {
	this.spriteSheet = ss["nem_intro_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Titulo = function() {
	this.spriteSheet = ss["nem_intro_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjBkIAAjHIDHAAIAADHIgQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.titulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Titulo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.titulo, new cjs.Rectangle(0,0,612.3,43.6), null);


(lib.pza11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NEMAK_pza_04();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pza11, new cjs.Rectangle(0,0,172,117), null);


(lib.pza10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NEMAK_pza_09();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pza10, new cjs.Rectangle(0,0,93,99), null);


(lib.pza9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NEMAK_pza_07();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pza9, new cjs.Rectangle(0,0,210,286), null);


(lib.pza8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NEMAK_pza_13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pza8, new cjs.Rectangle(0,0,93,99), null);


(lib.pza7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NEMAK_pza_10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pza7, new cjs.Rectangle(0,0,130,143), null);


(lib.pza6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NEMAK_pza_15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pza6, new cjs.Rectangle(0,0,130,110), null);


(lib.pza5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NEMAK_pza_16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pza5, new cjs.Rectangle(0,0,93,108), null);


(lib.pza4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NEMAK_pza_02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pza4, new cjs.Rectangle(0,0,130,117), null);


(lib.pza3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NEMAK_pza_05();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pza3, new cjs.Rectangle(0,0,193,162), null);


(lib.pza2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NEMAK_pza_03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pza2, new cjs.Rectangle(0,0,139,208), null);


(lib.pza1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NEMAK_pza_01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pza1, new cjs.Rectangle(0,0,93,77), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LogoNemak();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.673,0.673);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,251,99.6), null);


(lib.fondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Nemak_fondo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fondo, new cjs.Rectangle(0,0,619.6,444.3), null);


(lib.btnInicio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("Aq7kSIV3AAQBaAAAABaIAAFxQAABahaAAI13AAQhaAAAAhaIAAlxQAAhaBaAAg");
	this.shape.setTransform(79,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBjQgOgNAAgUQAAgLAFgJQAFgKAJgGQAIgFAKgDIAXgEQAggEAPgFIAAgHQAAgPgHgHQgKgJgUAAQgTAAgIAHQgJAGgFAQIgYgDQADgQAIgLQAIgJAOgGQAQgFAUgBQAUABAMAEQANAFAFAHQAGAHADALQABAHAAAQIAAAjQAAAlACAKQABAKAFAJIgbAAQgEgJgBgKQgPAMgOAFQgNAFgQAAQgZAAgNgMgAAlAnQgQACgHAEQgGACgEAHQgEAFAAAHQAAAKAIAHQAIAIAQAAQAPgBAMgGQAMgHAFgLQAEgKAAgRIAAgKQgOAGgdAEgAkIBmQgUgIgLgRQgMgRAAgWIAbgCQABAQAHALQAHAKAPAHQAPAFASAAQAQABANgFQAMgFAGgJQAGgIAAgKQAAgKgGgIQgFgHgOgFQgJgEgdgGQgegIgMgFQgPgIgHgMQgIgMAAgPQAAgQAJgOQAJgOASgIQASgHAWAAQAXAAATAIQASAHAKAQQAJAOABAUIgbACQgCgVgNgLQgNgKgYAAQgaAAgMAJQgMAKAAAOQAAALAJAIQAIAHAjAIQAiAIANAFQATAIAJAOQAJANAAARQAAARgKAPQgKAPgSAJQgTAIgXAAQgdAAgTgJgAEKBpQgIgEgDgIQgDgHAAgYIAAhYIgTAAIAAgVIATAAIAAgnIAagQIAAA3IAbAAIAAAVIgbAAIAABaQAAALACADQABADADACQADACAGAAIAMgBIADAXQgLACgJABQgOgBgIgEgAhSBpQgIgEgDgIQgDgHAAgYIAAhYIgTAAIAAgVIATAAIAAgnIAagQIAAA3IAbAAIAAAVIgbAAIAABaQAAALACADQABADADACQADACAGAAIAMgBIADAXQgLACgJABQgOgBgIgEgACTBsIAAibIAYAAIAAAYQAJgRAIgFQAHgGAKAAQANABAOAIIgJAZQgKgHgKABQgIAAgHAFQgHAFgDAJQgEANAAARIAABSg");
	this.shape_1.setTransform(77.7,27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0075C9").s().p("Aq7ETQhaAAAAhaIAAlxQAAhaBaAAIV3AAQBaAAAABaIAAFxQAABahaAAgAA8gXQAHAHAAAQIAAAGQgPAFggAEIgWAEQgLADgIAFQgJAGgFAKQgFAJAAALQAAAUANANQAOAMAZAAQAPAAAOgFQANgFAPgMQABAKAFAJIAbAAQgFgJgBgKQgCgKAAglIAAgjQAAgQgBgHQgDgLgGgHQgFgHgNgFQgNgEgUgBQgTABgPAFQgPAGgIAJQgIALgEAQIAaAEQAEgRAJgGQAIgHATAAQAUAAAKAJgAlAAjQAAAWAMARQALARATAIQAUAJAdAAQAXAAASgIQATgJAJgPQALgPAAgRQgBgRgIgNQgKgOgSgIQgNgFgjgIQgigIgJgHQgIgIAAgLQAAgOAMgKQALgJAaAAQAZAAANAKQANALACAVIAbgCQgBgUgJgOQgLgQgRgHQgTgIgXAAQgXAAgRAHQgSAIgJAOQgKAOAAAQQABAPAHAMQAIAMAPAIQAMAGAdAHQAeAGAJAEQAOAFAFAHQAGAIAAAKQAAAKgGAIQgGAJgMAFQgNAFgQgBQgSAAgPgFQgPgHgHgKQgHgLgBgQgADcgdIATAAIAABYQgBAYAEAHQADAIAIAEQAIAEAOABQAJgBALgCIgDgXIgMABQgGAAgDgCQgDgCgBgDQgCgDAAgLIAAhaIAbAAIAAgVIgbAAIAAg3IgaAQIAAAnIgTAAgAiAgdIASAAIAABYQABAYADAHQADAIAIAEQAIAEAOABQAJgBALgCIgDgXIgMABQgGAAgDgCQgDgCgCgDQgBgDAAgLIAAhaIAbAAIAAgVIgbAAIAAg3IgbAQIAAAnIgSAAgACGBpIAaAAIAAhSQAAgRAFgNQACgJAIgFQAGgFAJgBQAKAAAKAHIAJgZQgOgIgNgBQgKAAgHAGQgIAFgJAQIAAgXIgYAAgAgEBQQgIgHAAgKQAAgHADgFQAFgHAFgCQAHgEAQgCQAdgEAOgGIAAAKQAAARgEAKQgGALgMAHQgMAGgPABQgPAAgHgIg");
	this.shape_2.setTransform(79,27.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0062A2").s().p("Aq7ETQhaAAAAhaIAAlxQAAhaBaAAIV3AAQBaAAAABaIAAFxQAABahaAAgAA8gXQAHAHAAAQIAAAGQgPAFggAEIgWAEQgLADgIAFQgJAGgFAKQgFAJAAALQAAAUANANQAOAMAZAAQAPAAAOgFQANgFAPgMQABAKAFAJIAbAAQgFgJgCgKQgBgKAAglIAAgjQAAgQgBgHQgDgLgGgHQgFgHgNgFQgMgEgVgBQgTABgPAFQgPAGgIAJQgIALgEAQIAaAEQAEgRAJgGQAIgHATAAQATAAALAJgAlAAjQAAAWALARQAMARATAIQAUAJAdAAQAXAAASgIQATgJAKgPQAJgPABgRQgBgRgIgNQgKgOgSgIQgNgFgjgIQgigIgIgHQgJgIAAgLQAAgOAMgKQALgJAaAAQAZAAANAKQANALACAVIAbgCQgBgUgJgOQgLgQgRgHQgTgIgYAAQgWAAgRAHQgSAIgJAOQgKAOABAQQAAAPAHAMQAIAMAPAIQAMAGAeAHQAdAGAJAEQANAFAGAHQAGAIAAAKQAAAKgGAIQgGAJgMAFQgNAFgQgBQgTAAgOgFQgPgHgHgKQgHgLgBgQgADcgdIATAAIAABYQAAAYADAHQADAIAIAEQAIAEAOABQAJgBALgCIgDgXIgMABQgGAAgDgCQgDgCgBgDQgCgDAAgLIAAhaIAbAAIAAgVIgbAAIAAg3IgaAQIAAAnIgTAAgAiBgdIATAAIAABYQABAYADAHQADAIAIAEQAIAEAOABQAJgBALgCIgEgXIgLABQgGAAgDgCQgEgCgBgDQgBgDAAgLIAAhaIAaAAIAAgVIgaAAIAAg3IgbAQIAAAnIgTAAgACGBpIAaAAIAAhSQAAgRAFgNQACgJAIgFQAGgFAJgBQAKAAAKAHIAJgZQgOgIgNgBQgKAAgHAGQgIAFgJAQIAAgXIgYAAgAgEBQQgIgHAAgKQAAgHADgFQAFgHAFgCQAHgEAQgCQAdgEAOgGIAAAKQAAARgEAKQgGALgMAHQgLAGgQABQgPAAgHgIg");
	this.shape_3.setTransform(80,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{x:77.7}},{t:this.shape,p:{x:79}}]}).to({state:[{t:this.shape_1,p:{x:78.7}},{t:this.shape_3},{t:this.shape,p:{x:80}}]},1).wait(3));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().rr(-70,-29,140,58,9);
	this.shape_4.setTransform(9.2,32,1.099,1,0,0,0,-70,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,164.6,62.5);


(lib.mcContenido = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		parent.blockNextBtn();
	}
	this.frame_45 = function() {
		this.stop ();
		
		this.btnInicio.addEventListener("click", Inicio.bind(this));
		
		function Inicio() {  
			parent.animateNextSlide();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(45).call(this.frame_45).wait(1));

	// btn_inicio
	this.btnInicio = new lib.btnInicio();
	this.btnInicio.parent = this;
	this.btnInicio.setTransform(922,634.5,1,1,0,0,0,79,27.5);
	this.btnInicio._off = true;
	new cjs.ButtonHelper(this.btnInicio, 0, 1, 2, false, new lib.btnInicio(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnInicio).wait(45).to({_off:false},0).wait(1));

	// NEMAK_pza_16.png
	this.instance = new lib.pza5();
	this.instance.parent = this;
	this.instance.setTransform(577.8,236.4,0.9,0.9,0,0,0,46.6,54.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({x:512.1,y:168.6,alpha:1},14).wait(8));

	// titulo
	this.instance_1 = new lib.titulo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(354.1,70.8,1,1,0,0,0,306.1,21.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({alpha:1},14).wait(1));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(888.5,90.8,1,1,0,0,0,125.5,49.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).to({alpha:1},14).wait(1));

	// NEMAK_pza_15.png
	this.instance_3 = new lib.pza6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(678.1,228,0.9,0.9,0,0,0,65,55.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({x:770.1,y:205,alpha:1},14).wait(8));

	// NEMAK_pza_13.png
	this.instance_4 = new lib.pza8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(694.8,351.9,0.9,0.9,0,0,0,46.6,49.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({x:769.8,y:379.5,alpha:1},14).wait(8));

	// NEMAK_pza_10.png
	this.instance_5 = new lib.pza7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(689.8,332,0.9,0.9,0,0,0,65,71.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({x:875.8,y:352,alpha:1},14).wait(8));

	// NEMAK_pza_09.png
	this.instance_6 = new lib.pza10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(448.5,497.9,0.9,0.9,0,0,0,46.6,49.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({x:589.5,y:599.1,alpha:1},14).wait(8));

	// NEMAK_pza_07.png
	this.instance_7 = new lib.pza9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(634.8,413.7,0.9,0.9,0,0,0,105,143.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({x:797.4,y:552.7,alpha:1},23).wait(8));

	// NEMAK_pza_05.png
	this.instance_8 = new lib.pza3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(511.3,340.6,0.9,0.9,0,0,0,96.5,81);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).to({x:306.4,y:306.1,alpha:1},23).wait(8));

	// NEMAK_pza_04.png
	this.instance_9 = new lib.pza11();
	this.instance_9.parent = this;
	this.instance_9.setTransform(342.6,530.8,0.9,0.9,0,0,0,86,58.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({x:209.1,y:601.8,alpha:1},14).wait(8));

	// NEMAK_pza_03.png
	this.instance_10 = new lib.pza2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(487,297.2,0.9,0.9,0,0,0,69.5,104);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(18).to({_off:false},0).to({x:157,y:253,alpha:1},20).wait(8));

	// NEMAK_pza_02.png
	this.instance_11 = new lib.pza4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(561.1,262.8,0.9,0.9,0,0,0,65,58.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},0).to({x:361.5,y:172.6,alpha:1},14).wait(8));

	// NEMAK_pza_01.png
	this.instance_12 = new lib.pza1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(338.6,425.5,0.9,0.9,0,0,0,46.6,38.6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({_off:false},0).to({x:173.6,alpha:1},14).wait(8));

	// Nemak_fondo.png
	this.instance_13 = new lib.fondo();
	this.instance_13.parent = this;
	this.instance_13.setTransform(501.8,432.2,1,1,0,0,0,309.8,222.2);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},14).wait(32));

	// Marca
	this.instance_14 = new lib.Tween2("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(10,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFBFD").s().p("EhO5AzpMAAAhnRMCdzAAAMAAABnRg");
	this.shape.setTransform(526.5,352.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_14}]}).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1031.5,683);


// stage content:
(lib.nem_intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// contenido
	this.mcContenido = new lib.mcContenido();
	this.mcContenido.parent = this;
	this.mcContenido.setTransform(-10,-10,1,1,0,0,0,10,10);

	this.timeline.addTween(cjs.Tween.get(this.mcContenido).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484.5,311,1031.5,683);
// library properties:
lib.properties = {
	id: '2939EAD51B84CF4BA47BA552A56CD0F5',
	width: 1009,
	height: 662,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/nem_intro_atlas_.png?1523567138696", id:"nem_intro_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2939EAD51B84CF4BA47BA552A56CD0F5'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;