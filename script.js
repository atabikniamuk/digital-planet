
/* =====================================================
   DIGITAL PLANET
   INTERACTIVE 3D GALAXY
   PLANET EXPLORER + DIGITAL DNA
   SMK SUNAN BEJAGUNG
===================================================== */

(() => {
    "use strict";

    /* =================================================
       1. CHECK THREE.JS
    ================================================= */

    if (typeof THREE === "undefined") {
        console.error("Three.js tidak berhasil dimuat.");
        return;
    }

    /* =================================================
       2. PLANET DATABASE
    ================================================= */

    const planets = {
      
sun: {
    number: "00",
    name: "MATAHARI",
    category: "THE CENTER OF OUR SOLAR SYSTEM",
    color: "#ff9a25",
    light: "#ffe58a",
    dark: "#a52b08",
    description: "Matahari adalah bintang yang berada di pusat tata surya. Matahari menghasilkan cahaya dan panas sendiri melalui proses fusi nuklir di intinya. Gravitasi Matahari menjaga planet-planet tetap berada dalam orbitnya.",
    topics: [
        "Bintang Pusat Tata Surya",
        "Fusi Nuklir",
        "Inti Matahari",
        "Fotosfer",
        "Kromosfer",
        "Korona"
    ],
    learning: "Matahari memiliki beberapa lapisan. Intinya merupakan tempat berlangsungnya fusi nuklir yang mengubah hidrogen menjadi helium. Energi yang dihasilkan bergerak keluar hingga akhirnya dipancarkan sebagai cahaya dan panas. Matahari juga memiliki atmosfer yang terdiri dari fotosfer, kromosfer, dan korona.",
    recommendation: [
        "Suhu permukaan sekitar 5.500°C",
        "Usia sekitar 4,6 miliar tahun",
        "Jarak rata-rata ke Bumi 150 juta km",
        "Cahaya sampai ke Bumi sekitar 8 menit 20 detik"
    ]
},

  desain: {
            number: "01",
            name: "PLANET DESAIN",
            category: "CREATIVE UNIVERSE",
            color: "#e87535",
            light: "#ffc58b",
            dark: "#61250e",
            description: "Planet Desain merupakan dunia kreativitas visual. Di sini kamu akan mempelajari bagaimana ide dapat diubah menjadi karya visual yang menarik dan memiliki fungsi.",
            topics: [
                "Graphic Design",
                "UI/UX Design",
                "Typography",
                "Illustration",
                "Brand Identity",
                "Digital Creativity"
            ],
            learning: "Mulailah dengan mempelajari prinsip desain, warna, komposisi, tipografi, dan cara membangun antarmuka digital yang nyaman digunakan.",
            recommendation: [
                "Adobe Photoshop",
                "Illustrator",
                "Figma",
                "UI/UX"
            ]
        },

        jaringan: {
            number: "02",
            name: "PLANET JARINGAN",
            category: "CONNECTED WORLD",
            color: "#159bc9",
            light: "#9aeaff",
            dark: "#06345b",
            description: "Planet Jaringan adalah dunia yang menghubungkan berbagai perangkat. Pelajari bagaimana data berpindah dan bagaimana internet memungkinkan manusia terhubung.",
            topics: [
                "Computer Network",
                "Router",
                "Switch",
                "Wireless",
                "IP Address",
                "Network Security"
            ],
            learning: "Mulailah dengan memahami IP address, topologi jaringan, konfigurasi router, subnetting, dan dasar keamanan jaringan.",
            recommendation: [
                "Cisco Packet Tracer",
                "MikroTik",
                "Networking",
                "Linux"
            ]
        },

        server: {
            number: "03",
            name: "PLANET SERVER",
            category: "DIGITAL INFRASTRUCTURE",
            color: "#16ad7d",
            light: "#9affd4",
            dark: "#06412f",
            description: "Planet Server adalah pusat infrastruktur digital. Pelajari bagaimana server menyimpan data, menjalankan layanan, dan mendukung berbagai aplikasi.",
            topics: [
                "Linux Server",
                "Cloud Computing",
                "Database",
                "Web Hosting",
                "Virtualization",
                "Cyber Security"
            ],
            learning: "Pelajari sistem operasi Linux, layanan web server, database, manajemen jaringan server, serta teknologi cloud.",
            recommendation: [
                "Linux",
                "Ubuntu Server",
                "MySQL",
                "Cloud Computing"
            ]
        },

        ai: {
            number: "04",
            name: "PLANET AI",
            category: "INTELLIGENT FUTURE",
            color: "#8954e8",
            light: "#d4b1ff",
            dark: "#32135e",
            description: "Planet AI adalah dunia kecerdasan buatan. Pelajari bagaimana komputer dapat mengenali pola, memproses informasi, dan membantu manusia menyelesaikan masalah.",
            topics: [
                "Artificial Intelligence",
                "Machine Learning",
                "Python",
                "Data Science",
                "Automation",
                "Neural Network"
            ],
            learning: "Mulailah dengan dasar pemrograman Python, logika algoritma, pengolahan data, dan pengenalan machine learning.",
            recommendation: [
                "Python",
                "Machine Learning",
                "Data Science",
                "Automation"
            ]
        },

        future: {
            number: "05",
            name: "PLANET MASA DEPAN",
            category: "NEXT GENERATION",
            color: "#e63d58",
            light: "#ffabb7",
            dark: "#5d1023",
            description: "Planet Masa Depan menggambarkan perkembangan teknologi generasi berikutnya. Jelajahi inovasi yang dapat mengubah kehidupan dan dunia kerja.",
            topics: [
                "Robotics",
                "Internet of Things",
                "Virtual Reality",
                "Smart Technology",
                "Innovation",
                "Digital Career"
            ],
            learning: "Kenali teknologi baru seperti Internet of Things, robotika, realitas virtual, serta peluang karier dalam industri digital.",
            recommendation: [
                "Robotics",
                "Internet of Things",
                "3D Technology",
                "Innovation"
            ]
        }
    };

    /* =================================================
       3. GENERAL HELPERS
    ================================================= */

    const activeScenes = [];

    const random = (min, max) =>
        Math.random() * (max - min) + min;

    /* =================================================
       4. PROCEDURAL TEXTURE
    ================================================= */

    function createPlanetTexture(data) {
        const canvas = document.createElement("canvas");

        canvas.width = 1024;
        canvas.height = 512;

        const ctx = canvas.getContext("2d");

        const gradient = ctx.createLinearGradient(
            0, 0, 1024, 512
        );

        gradient.addColorStop(0, data.light);
        gradient.addColorStop(0.35, data.color);
        gradient.addColorStop(1, data.dark);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 1024, 512);

        // Surface details
        for (let i = 0; i < 220; i++) {
            const x = random(0, 1024);
            const y = random(0, 512);

            ctx.beginPath();

            ctx.ellipse(
                x,
                y,
                random(15, 105),
                random(2, 19),
                random(0, Math.PI),
                0,
                Math.PI * 2
            );

            ctx.fillStyle = Math.random() > 0.5
                ? data.light
                : data.dark;

            ctx.globalAlpha = random(0.07, 0.22);
            ctx.fill();
        }

        // Surface dots
        for (let i = 0; i < 650; i++) {
            ctx.beginPath();

            ctx.arc(
                random(0, 1024),
                random(0, 512),
                random(0.5, 4),
                0,
                Math.PI * 2
            );

            ctx.fillStyle = Math.random() > 0.5
                ? "#ffffff"
                : "#050505";

            ctx.globalAlpha = random(0.03, 0.2);
            ctx.fill();
        }

        ctx.globalAlpha = 1;

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;

        return texture;
    }

    /* =================================================
       5. CREATE PLANET SPHERE
    ================================================= */

    function createSphere(data, radius, key) {
        const group = new THREE.Group();

        const geometry = new THREE.SphereGeometry(
            radius,
            64,
            64
        );

        const material = new THREE.MeshStandardMaterial({
            map: createPlanetTexture(data),
            roughness: 0.85,
            metalness: 0.03
        });

        const sphere = new THREE.Mesh(
            geometry,
            material
        );

        sphere.userData.planetKey = key;
        sphere.userData.isClickablePlanet = true;

        group.add(sphere);

        // Atmosphere
        const atmosphere = new THREE.Mesh(
            new THREE.SphereGeometry(
                radius * 1.08,
                40,
                40
            ),
            new THREE.MeshBasicMaterial({
                color: data.color,
                transparent: true,
                opacity: 0.2,
                side: THREE.BackSide,
                depthWrite: false
            })
        );

        group.add(atmosphere);

        // Cloud layer
        const cloud = new THREE.Mesh(
            new THREE.SphereGeometry(
                radius * 1.012,
                32,
                32
            ),
            new THREE.MeshBasicMaterial({
                color: data.light,
                transparent: true,
                opacity: 0.1,
                wireframe: true
            })
        );

        group.add(cloud);

        // Future Planet Ring
        if (key === "future") {
            const ring = new THREE.Mesh(
                new THREE.RingGeometry(
                    radius * 1.25,
                    radius * 1.48,
                    128
                ),
                new THREE.MeshBasicMaterial({
                    color: data.light,
                    transparent: true,
                    opacity: 0.3,
                    side: THREE.DoubleSide,
                    depthWrite: false
                })
            );

            ring.rotation.x = Math.PI / 2.5;
            ring.rotation.y = 0.15;

            group.add(ring);
        }

        group.userData.sphere = sphere;
        group.userData.cloud = cloud;

        return group;
    }

    /* =================================================
       6. LIGHTING
    ================================================= */

    function addLighting(scene, color = 0x42dfff) {
        scene.add(
            new THREE.AmbientLight(0xffffff, 0.9)
        );

        const sunlight = new THREE.DirectionalLight(
            0xffffff,
            2.7
        );

        sunlight.position.set(-4, 5, 6);
        scene.add(sunlight);

        const backlight = new THREE.PointLight(
            color,
            2.5,
            20
        );

        backlight.position.set(4, -3, -5);
        scene.add(backlight);
    }

    /* =================================================
       7. CREATE ORBIT
    ================================================= */

    function createOrbit(scene, radius, color, tilt) {
        const points = [];

        for (let i = 0; i < 160; i++) {
            const angle = (i / 160) * Math.PI * 2;

            points.push(
                new THREE.Vector3(
                    Math.cos(angle) * radius,
                    Math.sin(angle) * radius,
                    0
                )
            );
        }

        const geometry = new THREE.BufferGeometry()
            .setFromPoints(points);

        const material = new THREE.LineBasicMaterial({
            color,
            transparent: true,
            opacity: 0.22
        });

        const line = new THREE.LineLoop(
            geometry,
            material
        );

        line.rotation.copy(tilt);

        scene.add(line);

        return line;
    }

 
    /* =================================================
       8. HERO GALAXY
       CENTRAL SUN EDITION
    ================================================= */

    const heroContainer = document.getElementById("hero3D");

    if (heroContainer) {
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            40,
            Math.max(heroContainer.clientWidth, 1) /
            Math.max(heroContainer.clientHeight, 1),
            0.1,
            100
        );

        camera.position.set(0, 0, 7.3);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "low-power"
        });

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio || 1, 1.5)
        );

        renderer.setSize(
            heroContainer.clientWidth,
            heroContainer.clientHeight
        );

        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.setClearColor(0x000000, 0);

        heroContainer.replaceChildren(renderer.domElement);

        addLighting(scene, 0xff8a24);

        // =============================================
        // CENTRAL SUN TEXTURE
        // =============================================

        function createSunTexture() {
            const canvas = document.createElement("canvas");

            canvas.width = 1024;
            canvas.height = 512;

            const ctx = canvas.getContext("2d");

            const gradient = ctx.createLinearGradient(
                0, 0, 1024, 512
            );

            gradient.addColorStop(0, "#ffdf72");
            gradient.addColorStop(0.3, "#ffae32");
            gradient.addColorStop(0.65, "#ff741c");
            gradient.addColorStop(1, "#c92e08");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 1024, 512);

            // Solar surface turbulence
            for (let i = 0; i < 500; i++) {
                const x = random(0, 1024);
                const y = random(0, 512);

                const radiusX = random(8, 65);
                const radiusY = random(3, 20);

                const glow = ctx.createRadialGradient(
                    x, y, 0,
                    x, y, radiusX
                );

                glow.addColorStop(
                    0,
                    Math.random() > 0.5
                        ? "rgba(255,245,160,0.8)"
                        : "rgba(255,75,10,0.6)"
                );

                glow.addColorStop(
                    1,
                    "rgba(255,120,20,0)"
                );

                ctx.fillStyle = glow;

                ctx.beginPath();

                ctx.ellipse(
                    x,
                    y,
                    radiusX,
                    radiusY,
                    random(0, Math.PI),
                    0,
                    Math.PI * 2
                );

                ctx.fill();
            }

            // Bright solar spots
            for (let i = 0; i < 250; i++) {
                ctx.beginPath();

                ctx.arc(
                    random(0, 1024),
                    random(0, 512),
                    random(1, 5),
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = "#fff0a0";
                ctx.globalAlpha = random(0.1, 0.7);
                ctx.fill();
            }

            ctx.globalAlpha = 1;

            const texture = new THREE.CanvasTexture(canvas);
            texture.colorSpace = THREE.SRGBColorSpace;

            return texture;
        }

        // =============================================
        // MAIN SUN
        // =============================================

      const mainPlanet = createSphere(
    planets.sun,
    0.62,
    "sun"
);

        const sunSphere = mainPlanet.userData.sphere;

        // Replace original planet texture
        if (sunSphere.material.map) {
            sunSphere.material.map.dispose();
        }

        sunSphere.material.dispose();

        sunSphere.material = new THREE.MeshBasicMaterial({
            map: createSunTexture(),
            color: 0xffffff
        });

        // Atmosphere becomes golden
        const sunAtmosphere = mainPlanet.children[1];

        sunAtmosphere.material.color.set("#ff9a25");
        sunAtmosphere.material.opacity = 0.32;

        // Remove the wireframe cloud appearance
        mainPlanet.userData.cloud.visible = false;

        // =============================================
        // INNER SOLAR GLOW
        // =============================================

        const innerGlow = new THREE.Mesh(
            new THREE.SphereGeometry(0.73, 48, 48),
            new THREE.MeshBasicMaterial({
                color: 0xff8a18,
                transparent: true,
                opacity: 0.22,
                side: THREE.BackSide,
                depthWrite: false,
                blending: THREE.AdditiveBlending
            })
        );

        mainPlanet.add(innerGlow);

        // =============================================
        // OUTER SOLAR CORONA
        // =============================================

        const outerGlow = new THREE.Mesh(
            new THREE.SphereGeometry(0.88, 48, 48),
            new THREE.MeshBasicMaterial({
                color: 0xff5b12,
                transparent: true,
                opacity: 0.13,
                side: THREE.BackSide,
                depthWrite: false,
                blending: THREE.AdditiveBlending
            })
        );

        mainPlanet.add(outerGlow);

        // Additional golden halo
        const goldenGlow = new THREE.Mesh(
            new THREE.SphereGeometry(1.05, 48, 48),
            new THREE.MeshBasicMaterial({
                color: 0xffb52e,
                transparent: true,
                opacity: 0.055,
                side: THREE.BackSide,
                depthWrite: false,
                blending: THREE.AdditiveBlending
            })
        );

        mainPlanet.add(goldenGlow);

        // Store glow references for animation
        mainPlanet.userData.innerGlow = innerGlow;
        mainPlanet.userData.outerGlow = outerGlow;
        mainPlanet.userData.goldenGlow = goldenGlow;

        // Sun illumination
        const sunLight = new THREE.PointLight(
            0xffa52b,
            3.5,
            12
        );

        scene.add(sunLight);

        sunLight.position.set(0, 0, 0);

        // Main sun stays in the center
        scene.add(mainPlanet);

        // =============================================
        // FIVE ORBITING PLANETS
        // =============================================

        const orbitSettings = [
            {
                key: "desain",
                radius: 1.35,
                size: 0.16,
                speed: 0.48,
                tilt: 0.25
            },
            {
                key: "jaringan",
                radius: 1.85,
                size: 0.19,
                speed: -0.34,
                tilt: 0.65
            },
            {
                key: "server",
                radius: 2.35,
                size: 0.17,
                speed: 0.25,
                tilt: -0.4
            },
            {
                key: "ai",
                radius: 2.85,
                size: 0.21,
                speed: -0.2,
                tilt: 0.85
            },
            {
                key: "future",
                radius: 3.25,
                size: 0.18,
                speed: 0.16,
                tilt: -0.7
            }
        ];

        const orbitPlanets = [];

        orbitSettings.forEach((config, index) => {
            const pivot = new THREE.Group();

            pivot.rotation.x = config.tilt;
            pivot.rotation.z = index * 0.35;

            scene.add(pivot);

            const planetGroup = createSphere(
                planets[config.key],
                config.size,
                config.key
            );

            planetGroup.position.x = config.radius;

            pivot.add(planetGroup);

            createOrbit(
                scene,
                config.radius,
                new THREE.Color(planets[config.key].light),
                pivot.rotation
            );

            orbitPlanets.push({
                pivot,
                planetGroup,
                speed: config.speed,
                key: config.key
            });
        });

        // =============================================
        // STARFIELD
        // =============================================

        const starPositions = [];

        for (let i = 0; i < 900; i++) {
            starPositions.push(
                random(-12, 12),
                random(-8, 8),
                random(-8, 8)
            );
        }

        const starGeometry = new THREE.BufferGeometry();

        starGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(
                starPositions,
                3
            )
        );

        const stars = new THREE.Points(
            starGeometry,
            new THREE.PointsMaterial({
                color: 0xb7dfff,
                size: 0.025,
                transparent: true,
                opacity: 0.8
            })
        );

        scene.add(stars);

        // =============================================
        // CLICK DETECTION
        // =============================================

        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();

        renderer.domElement.style.cursor = "pointer";

        renderer.domElement.addEventListener("click", event => {
            const rect = renderer.domElement.getBoundingClientRect();

            pointer.x =
                ((event.clientX - rect.left) / rect.width) * 2 - 1;

            pointer.y =
                -((event.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(pointer, camera);

            const clickableMeshes = [
                mainPlanet.userData.sphere,
                ...orbitPlanets.map(
                    item => item.planetGroup.userData.sphere
                )
            ];

            const hits = raycaster.intersectObjects(
                clickableMeshes,
                false
            );

            if (hits.length > 0) {
                const key = hits[0].object.userData.planetKey;
                openPlanet(key);
            }
        });

        // =============================================
        // HERO RESIZE
        // =============================================

        const heroResize = new ResizeObserver(() => {
            const w = heroContainer.clientWidth;
            const h = heroContainer.clientHeight;

            if (!w || !h) return;

            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        });

        heroResize.observe(heroContainer);

        activeScenes.push({
            scene,
            camera,
            renderer,
            hero: true,
            mainPlanet,
            orbitPlanets,
            stars,
            sunLight,
            resizeObserver: heroResize,
            disposed: false
        });
    }


    /* =================================================
       9. PLANET CARDS
    ================================================= */

    document.querySelectorAll(".planet-3d").forEach(container => {
        const key = container.dataset.planet;

        if (!planets[key]) return;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            35,
            Math.max(container.clientWidth, 1) /
            Math.max(container.clientHeight, 1),
            0.1,
            100
        );

        camera.position.z = 3.2;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "low-power"
        });

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio || 1, 1.5)
        );

        renderer.setSize(
            container.clientWidth,
            container.clientHeight
        );

        renderer.outputColorSpace = THREE.SRGBColorSpace;

        container.replaceChildren(renderer.domElement);

        addLighting(scene, new THREE.Color(planets[key].color));

        const planet = createSphere(
            planets[key],
            0.82,
            key
        );

        scene.add(planet);

        const resizeObserver = new ResizeObserver(() => {
            const w = container.clientWidth;
            const h = container.clientHeight;

            if (!w || !h) return;

            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        });

        resizeObserver.observe(container);

        activeScenes.push({
            scene,
            camera,
            renderer,
            planet,
            speed: 0.25,
            resizeObserver,
            disposed: false
        });
    });

    /* =================================================
       10. PLANET DETAIL PANEL
    ================================================= */

    const detailPanel = document.getElementById("planetDetail");
    const detailContainer = document.getElementById("detailPlanet3D");

    let detailScene = null;
    let currentPlanet = null;

    function openPlanet(key) {
        const data = planets[key];

        if (!data || !detailPanel) return;

        currentPlanet = key;

        detailPanel.hidden = false;
        detailPanel.classList.add("active");

        const setText = (id, value) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        };

        setText("detailNumber", `PLANET ${data.number}`);
        setText("detailTitle", data.name);
        setText("detailCategory", data.category);
        setText("detailDescription", data.description);
        setText("detailLearning", data.learning);

        // Topics
        const topics = document.getElementById("detailTopics");

        if (topics) {
            topics.replaceChildren();

            data.topics.forEach(topic => {
                const tag = document.createElement("span");
                tag.textContent = topic;
                topics.appendChild(tag);
            });
        }

        // Recommendations
        const recommendations = document.getElementById(
            "detailRecommendations"
        );

        if (recommendations) {
            recommendations.replaceChildren();

            data.recommendation.forEach(tech => {
                const tag = document.createElement("span");
                tag.textContent = tech;
                recommendations.appendChild(tag);
            });
        }

        // Replace previous detail scene
        if (detailScene) {
            disposeScene(detailScene);
            detailScene = null;
        }

        if (detailContainer) {
            detailScene = createDetailScene(
                detailContainer,
                key
            );
        }

        detailPanel.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

    /* =================================================
       11. DETAIL 3D SCENE
       PLANET SIZE FIX
    ================================================= */

    function createDetailScene(container, key) {
        const data = planets[key];

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            35,
            Math.max(container.clientWidth, 1) /
            Math.max(container.clientHeight, 1),
            0.1,
            100
        );

        // Kamera lebih jauh agar planet pas di kotak
        camera.position.set(0, 0, 4.2);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "low-power"
        });

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio || 1, 1.5)
        );

        renderer.setSize(
            container.clientWidth,
            container.clientHeight
        );

        renderer.outputColorSpace = THREE.SRGBColorSpace;

        container.replaceChildren(renderer.domElement);

        addLighting(scene, new THREE.Color(data.color));

        // Ukuran planet detail diperkecil
        const planet = createSphere(data, 0.68, key);

        scene.add(planet);

        // Interaksi drag mouse dan sentuhan
        let dragging = false;
        let lastX = 0;
        let lastY = 0;

        renderer.domElement.style.cursor = "grab";
        renderer.domElement.style.touchAction = "none";

        renderer.domElement.addEventListener("pointerdown", event => {
            dragging = true;
            lastX = event.clientX;
            lastY = event.clientY;

            renderer.domElement.setPointerCapture(event.pointerId);
            renderer.domElement.style.cursor = "grabbing";
        });

        renderer.domElement.addEventListener("pointermove", event => {
            if (!dragging) return;

            const dx = event.clientX - lastX;
            const dy = event.clientY - lastY;

            planet.rotation.y += dx * 0.008;
            planet.rotation.x += dy * 0.008;

            lastX = event.clientX;
            lastY = event.clientY;
        });

        function stopDragging() {
            dragging = false;
            renderer.domElement.style.cursor = "grab";
        }

        renderer.domElement.addEventListener("pointerup", stopDragging);
        renderer.domElement.addEventListener("pointercancel", stopDragging);
        renderer.domElement.addEventListener("lostpointercapture", stopDragging);

        const resizeObserver = new ResizeObserver(() => {
            const w = container.clientWidth;
            const h = container.clientHeight;

            if (!w || !h) return;

            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        });

        resizeObserver.observe(container);

        const item = {
            scene,
            camera,
            renderer,
            planet,
            resizeObserver,
            disposed: false,
            detail: true
        };

        activeScenes.push(item);

        return item;
    }

    /* =================================================
       12. DISPOSE SCENE
    ================================================= */

    function disposeScene(item) {
        if (!item || item.disposed) return;

        item.disposed = true;

        if (item.resizeObserver) {
            item.resizeObserver.disconnect();
        }

        item.scene.traverse(object => {
            if (object.geometry) {
                object.geometry.dispose();
            }

            if (object.material) {
                const materials = Array.isArray(object.material)
                    ? object.material
                    : [object.material];

                materials.forEach(material => {
                    if (material.map) material.map.dispose();
                    material.dispose();
                });
            }
        });

        item.renderer.dispose();

        if (item.renderer.domElement.parentNode) {
            item.renderer.domElement.parentNode.removeChild(
                item.renderer.domElement
            );
        }
    }

    /* =================================================
       13. PLANET EXPLORER BUTTONS
    ================================================= */

    document.querySelectorAll("[data-open-planet]").forEach(button => {
        button.addEventListener("click", () => {
            openPlanet(button.dataset.openPlanet);
        });
    });

    document.querySelectorAll("[data-planet-card]").forEach(card => {
        card.addEventListener("click", event => {
            if (event.target.closest("button")) return;

            openPlanet(card.dataset.planetCard);
        });
    });

    document.getElementById("closeDetail")?.addEventListener("click", () => {
        if (detailPanel) {
            detailPanel.classList.remove("active");
            detailPanel.hidden = true;
        }

        if (detailScene) {
            disposeScene(detailScene);
            detailScene = null;
        }
    });

    /* =================================================
       14. MOBILE NAVIGATION
    ================================================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle?.addEventListener("click", () => {
        navMenu?.classList.toggle("open");

        menuToggle.textContent =
            navMenu?.classList.contains("open") ? "✕" : "☰";
    });

    navMenu?.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");

            if (menuToggle) {
                menuToggle.textContent = "☰";
            }
        });
    });

    /* =================================================
       15. DIGITAL DNA QUESTIONS
    ================================================= */

    const questions = [
        {
            question: "Kamu paling tertarik dengan kegiatan apa?",
            answers: [
                ["Membuat desain, gambar, dan karya visual.", "desain"],
                ["Menghubungkan komputer dan perangkat.", "jaringan"],
                ["Mengelola server dan menyimpan data.", "server"],
                ["Membuat teknologi kecerdasan buatan.", "ai"],
                ["Menciptakan inovasi teknologi baru.", "future"]
            ]
        },
        {
            question: "Jika diberi sebuah proyek, apa yang ingin kamu buat?",
            answers: [
                ["Website dengan tampilan yang menarik.", "desain"],
                ["Jaringan internet untuk sebuah gedung.", "jaringan"],
                ["Sistem penyimpanan dan pengelolaan data.", "server"],
                ["Program pintar yang bisa belajar.", "ai"],
                ["Robot atau perangkat masa depan.", "future"]
            ]
        },
        {
            question: "Masalah apa yang paling ingin kamu selesaikan?",
            answers: [
                ["Membuat informasi lebih mudah dipahami secara visual.", "desain"],
                ["Membuat koneksi lebih cepat dan stabil.", "jaringan"],
                ["Menjaga data dan sistem tetap berjalan.", "server"],
                ["Mengotomatisasi pekerjaan manusia.", "ai"],
                ["Mengembangkan teknologi yang belum banyak digunakan.", "future"]
            ]
        },
        {
            question: "Perangkat atau teknologi mana yang paling menarik?",
            answers: [
                ["Tablet gambar dan aplikasi desain.", "desain"],
                ["Router, switch, dan kabel jaringan.", "jaringan"],
                ["Server, database, dan cloud.", "server"],
                ["Komputer AI dan machine learning.", "ai"],
                ["Robot, VR, dan Internet of Things.", "future"]
            ]
        },
        {
            question: "Kamu ingin dikenal sebagai seseorang yang...",
            answers: [
                ["Kreatif dan mampu menghasilkan karya visual.", "desain"],
                ["Ahli membangun koneksi dan komunikasi.", "jaringan"],
                ["Mampu mengelola infrastruktur digital.", "server"],
                ["Mampu membuat program yang cerdas.", "ai"],
                ["Berani menciptakan teknologi masa depan.", "future"]
            ]
        }
    ];

    let currentQuestion = 0;
    let selectedAnswers = Array(questions.length).fill(null);
    let resultPlanetKey = null;

    const quizContainer = document.getElementById("quizContainer");
    const analysisScreen = document.getElementById("analysisScreen");
    const resultScreen = document.getElementById("resultScreen");

    const questionNumber = document.getElementById("questionNumber");
    const questionText = document.getElementById("question");
    const answersContainer = document.getElementById("answers");

    const progressText = document.getElementById("progressText");
    const progressFill = document.getElementById("progressFill");

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    /* =================================================
       16. RENDER QUIZ
    ================================================= */

    function renderQuestion() {
        if (!quizContainer || !questionText || !answersContainer) return;

        const item = questions[currentQuestion];

        questionNumber.textContent =
            `QUESTION ${String(currentQuestion + 1).padStart(2, "0")} / 05`;

        questionText.textContent = item.question;

        const progress =
            ((currentQuestion + 1) / questions.length) * 100;

        progressText.textContent = `${Math.round(progress)}%`;
        progressFill.style.width = `${progress}%`;

        answersContainer.replaceChildren();

        item.answers.forEach((answer, index) => {
            const button = document.createElement("button");

            button.className = "answer-option";

            if (selectedAnswers[currentQuestion] === answer[1]) {
                button.classList.add("selected");
            }

            const marker = document.createElement("span");
            marker.className = "option-marker";
            marker.textContent = String.fromCharCode(65 + index);

            const text = document.createElement("span");
            text.textContent = answer[0];

            button.append(marker, text);

            button.addEventListener("click", () => {
                selectedAnswers[currentQuestion] = answer[1];
                renderQuestion();
            });

            answersContainer.appendChild(button);
        });

        if (prevBtn) {
            prevBtn.disabled = currentQuestion === 0;
        }

        if (nextBtn) {
            nextBtn.disabled =
                selectedAnswers[currentQuestion] === null;

            nextBtn.textContent =
                currentQuestion === questions.length - 1
                    ? "ANALYZE DNA ↗"
                    : "NEXT →";
        }
    }

    prevBtn?.addEventListener("click", () => {
        if (currentQuestion <= 0) return;

        currentQuestion--;
        renderQuestion();
    });

    nextBtn?.addEventListener("click", () => {
        if (selectedAnswers[currentQuestion] === null) return;

        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            renderQuestion();
        } else {
            startAnalysis();
        }
    });

    /* =================================================
       17. DNA ANALYSIS
    ================================================= */

    function calculateResult() {
        const scores = {
            desain: 0,
            jaringan: 0,
            server: 0,
            ai: 0,
            future: 0
        };

        selectedAnswers.forEach(answer => {
            if (answer && scores[answer] !== undefined) {
                scores[answer]++;
            }
        });

        const ranked = Object.entries(scores)
            .sort((a, b) => b[1] - a[1]);

        const winner = ranked[0];

        resultPlanetKey = winner[0];

        return {
            key: winner[0],
            percentage: Math.round(
                (winner[1] / questions.length) * 100
            )
        };
    }

    function startAnalysis() {
        if (!quizContainer || !analysisScreen) return;

        quizContainer.classList.add("hidden");
        analysisScreen.classList.remove("hidden");

        const fill = document.getElementById(
            "analysisProgressFill"
        );

        const percent = document.getElementById(
            "analysisPercent"
        );

        let progress = 0;

        const interval = setInterval(() => {
            progress += 2;

            if (fill) fill.style.width = `${progress}%`;
            if (percent) percent.textContent = `${progress}%`;

            if (progress >= 100) {
                clearInterval(interval);

                setTimeout(() => {
                    analysisScreen.classList.add("hidden");
                    showResult();
                }, 450);
            }
        }, 35);
    }

    /* =================================================
       18. RESULT SCREEN
    ================================================= */

    let resultScene = null;

    function showResult() {
        const result = calculateResult();
        const data = planets[result.key];

        resultScreen?.classList.remove("hidden");

        const setText = (id, value) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        };

        setText("resultPlanet", data.name);
        setText("matchPercent", `${result.percentage}%`);
        setText("resultDescription", data.description);

        const recommended = document.getElementById(
            "recommendedTech"
        );

        if (recommended) {
            recommended.replaceChildren();

            data.recommendation.forEach(tech => {
                const tag = document.createElement("span");
                tag.textContent = tech;
                recommended.appendChild(tag);
            });
        }

        if (resultScene) {
            disposeScene(resultScene);
            resultScene = null;
        }

        const resultContainer = document.getElementById(
            "resultPlanet3D"
        );

        if (resultContainer) {
            resultScene = createDetailScene(
                resultContainer,
                result.key
            );
        }

        resultScreen?.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

    /* =================================================
       19. RESULT BUTTONS
    ================================================= */

    document.getElementById("explorePlanetBtn")?.addEventListener(
        "click",
        () => {
            if (!resultPlanetKey) return;

            document.getElementById("explore")?.scrollIntoView({
                behavior: "smooth"
            });

            setTimeout(() => {
                openPlanet(resultPlanetKey);
            }, 500);
        }
    );

    document.getElementById("restartBtn")?.addEventListener(
        "click",
        restartQuiz
    );

    function restartQuiz() {
        currentQuestion = 0;
        selectedAnswers = Array(questions.length).fill(null);
        resultPlanetKey = null;

        if (resultScene) {
            disposeScene(resultScene);
            resultScene = null;
        }

        resultScreen?.classList.add("hidden");
        analysisScreen?.classList.add("hidden");
        quizContainer?.classList.remove("hidden");

        const fill = document.getElementById(
            "analysisProgressFill"
        );

        const percent = document.getElementById(
            "analysisPercent"
        );

        if (fill) fill.style.width = "0%";
        if (percent) percent.textContent = "0%";

        renderQuestion();

        document.getElementById("digital-dna")?.scrollIntoView({
            behavior: "smooth"
        });
    }

 
    /* =================================================
       20. MAIN ANIMATION LOOP
       SUN GLOW ANIMATION
    ================================================= */

    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        const delta = Math.min(clock.getDelta(), 0.05);
        const elapsed = clock.elapsedTime;

        activeScenes.forEach(item => {
            if (item.disposed) return;

            if (item.hero) {
                // SUN ROTATION
                item.mainPlanet.rotation.y += delta * 0.16;

                item.mainPlanet.rotation.x =
                    Math.sin(elapsed * 0.25) * 0.035;

                // SUN GLOW PULSATION
                const pulse =
                    1 + Math.sin(elapsed * 2) * 0.035;

                item.mainPlanet.userData.innerGlow.scale.setScalar(
                    pulse
                );

                item.mainPlanet.userData.outerGlow.scale.setScalar(
                    pulse * 1.04
                );

                item.mainPlanet.userData.goldenGlow.scale.setScalar(
                    pulse * 1.08
                );

                // SUN LIGHT PULSATION
                if (item.sunLight) {
                    item.sunLight.intensity =
                        3.5 + Math.sin(elapsed * 2) * 0.35;
                }

                // ORBITING PLANETS
                item.orbitPlanets.forEach((orbit, index) => {
                    orbit.pivot.rotation.y +=
                        delta * orbit.speed;

                    orbit.planetGroup.rotation.y +=
                        delta * (0.35 + index * 0.08);

                    orbit.planetGroup.rotation.x +=
                        delta * 0.025;

                    orbit.planetGroup.userData.cloud.rotation.y +=
                        delta * (0.65 + index * 0.1);

                    orbit.planetGroup.userData.cloud.rotation.x +=
                        delta * 0.04;

                    orbit.planetGroup.position.y =
                        Math.sin(elapsed * 0.8 + index) * 0.025;
                });

                // STARFIELD MOVEMENT
                item.stars.rotation.y += delta * 0.012;
                item.stars.rotation.x += delta * 0.004;

            } else if (item.planet) {
                if (!item.detail) {
                    item.planet.rotation.y +=
                        delta * (item.speed || 0.2);

                    item.planet.rotation.x =
                        Math.sin(elapsed * 0.3) * 0.025;

                    item.planet.userData.cloud.rotation.y +=
                        delta * 0.38;

                    item.planet.userData.cloud.rotation.x +=
                        delta * 0.05;
                } else {
                    item.planet.userData.cloud.rotation.y +=
                        delta * 0.12;
                }
            }

            item.renderer.render(
                item.scene,
                item.camera
            );
        });
    }

    animate();


    /* =================================================
       21. CLEANUP
    ================================================= */

    window.addEventListener("pagehide", () => {
        activeScenes.forEach(item => {
            disposeScene(item);
        });
    });

    /* =================================================
       22. INITIALIZE
    ================================================= */

    renderQuestion();

    console.log(
        "%c DIGITAL PLANET ",
        "background:#37e8ff;color:#050816;padding:10px;font-weight:bold;font-size:18px;"
    );

    console.log(
        "SMK SUNAN BEJAGUNG — GALAXY SYSTEM ONLINE"
    );

})();
