var RANDOM_CSS = {
  cssfiles : ['purple.css','blue.css','orange.css','yellow.css','green.css','pink.css'],
  pathtocss : 'css/',
  getrandomcss : function() { return this.cssfiles[Math.floor(Math.random()*this.cssfiles.length)]; },
  getlinktag : function() { return '<link rel="stylesheet" type="text/css" href="'+this.pathtocss+this.getrandomcss()+'" />'; },
  printlinktag : function() { document.write(this.getlinktag()); }
};
