// JavaScript Document
//icon的alert
        var searchIcon = document.getElementById('search-icon');
        searchIcon.onclick = function() {
            alert("其功能尚未开发，敬请期待");
        };
var searchIcon = document.getElementById('user-icon');
        searchIcon.onclick = function() {
            alert("其功能尚未开发，敬请期待");
        };
//iframe
   var iframe = document.getElementById("dynamic");
    iframe.style.width = "833px";
    iframe.style.height = "468px";
//鼠标的拖尾
(function fairyDustCursor() {
 
            var possibleColors = ["#144a74", "#4e7ca1", "#b0d5df"]
            var width = window.innerWidth;
            var height = window.innerHeight;
            var cursor = { x: width / 2, y: width / 2 };
            var particles = [];
 
            function init() {
                bindEvents();
                loop();
            }
 
            // Bind events that are needed
            function bindEvents() {
                document.addEventListener('mousemove', onMouseMove);
                window.addEventListener('resize', onWindowResize);
            }
 
            function onWindowResize(e) {
                width = window.innerWidth;
                height = window.innerHeight;
            }
 
            function onMouseMove(e) {
                cursor.x = e.clientX;
                cursor.y = e.clientY;
 
                addParticle(cursor.x, cursor.y, possibleColors[Math.floor(Math.random() * possibleColors.length)]);
            }
 
            function addParticle(x, y, color) {
                var particle = new Particle();
                particle.init(x, y, color);
                particles.push(particle);
            }
 
            function updateParticles() {
 
                // Updated
                for (var i = 0; i < particles.length; i++) {
                    particles[i].update();
                }
 
                // Remove dead particles
                for (var i = particles.length - 1; i >= 0; i--) {
                    if (particles[i].lifeSpan < 0) {
                        particles[i].die();
                        particles.splice(i, 1);
                    }
                }
 
            }
 
            function loop() {
                requestAnimationFrame(loop);
                updateParticles();
            }
 
            /**
             * Particles
             */
 
            function Particle() {
 
                this.character = "*";
                this.lifeSpan = 120; //ms
                this.initialStyles = {
                    "position": "fixed",
                    "display": "inline-block",
                    "top": "0px",
                    "left": "0px",
                    "pointerEvents": "none",
                    "touch-action": "none",
                    "z-index": "10000000",
                    "fontSize": "25px",
                    "will-change": "transform"
                };
 
                // Init, and set properties
                this.init = function (x, y, color) {
 
                    this.velocity = {
                        x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
                        y: 1
                    };
 
                    this.position = { x: x + 10, y: y + 10 };
                    this.initialStyles.color = color;
 
                    this.element = document.createElement('span');
                    this.element.innerHTML = this.character;
                    applyProperties(this.element, this.initialStyles);
                    this.update();
 
                    document.querySelector('.js-cursor-container').appendChild(this.element);
                };
 
                this.update = function () {
                    this.position.x += this.velocity.x;
                    this.position.y += this.velocity.y;
                    this.lifeSpan--;
 
                    this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px, 0) scale(" + (this.lifeSpan / 120) + ")";
                }
 
                this.die = function () {
                    this.element.parentNode.removeChild(this.element);
                }
 
            }
 
            /**
             * Utils
             */
 
            // Applies css `properties` to an element.
            function applyProperties(target, properties) {
                for (var key in properties) {
                    target.style[key] = properties[key];
                }
            }
 
            if (!('ontouchstart' in window || navigator.msMaxTouchPoints)) init();
        })();    