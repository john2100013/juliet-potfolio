"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from "react-icons/fi";
import Image from "next/image";

const categories = [
  "All",
  "Maintenance",
  "Networking",
  "Laptop Support",
  "3CX Support",
  "Cable Management",
];

const galleryImages = [
  {
    id: 1,
    src: "/placeholder-gallery-1.jpg",
    alt: "Desktop maintenance",
    category: "Maintenance",
    title: "Desktop Cleaning",
  },
  {
    id: 2,
    src: "/placeholder-gallery-2.jpg",
    alt: "Network troubleshooting",
    category: "Networking",
    title: "Network Diagnostics",
  },
  {
    id: 3,
    src: "/placeholder-gallery-3.jpg",
    alt: "Laptop repair",
    category: "Laptop Support",
    title: "Laptop Troubleshooting",
  },
  {
    id: 4,
    src: "/placeholder-gallery-4.jpg",
    alt: "3CX phone setup",
    category: "3CX Support",
    title: "3CX Phone Repair",
  },
  {
    id: 5,
    src: "/placeholder-gallery-5.jpg",
    alt: "Cable organization",
    category: "Cable Management",
    title: "Cable Organization",
  },
  {
    id: 6,
    src: "/blowing.jpeg",
    alt: "Hardware inspection",
    category: "Maintenance",
    title: "Hardware Inspection",
  },
  {
    id: 7,
    src: "/desktop preventive maintenance.jpeg",
    alt: "Server room",
    category: "Networking",
    title: "Server Room Work",
  },
  {
    id: 8,
    src: "/placeholder-gallery-8.jpg",
    alt: "Cable testing",
    category: "Cable Management",
    title: "Cable Testing",
  },
  {
    id: 9,
    src: "/tools.jpeg",
    alt: "System optimization",
    category: "Laptop Support",
    title: "System Optimization",
  },
  {
    id: 10,
    src: "/placeholder-gallery-10.jpg",
    alt: "VoIP configuration",
    category: "3CX Support",
    title: "VoIP Configuration",
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<typeof galleryImages[0] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setLightboxImage(image);
    setLightboxIndex(filteredImages.findIndex((img) => img.id === image.id));
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredImages.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(prevIndex);
    setLightboxImage(filteredImages[prevIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, lightboxIndex]);

  return (
    <section id="gallery" className="py-20 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Photo Gallery
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Work Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visual documentation of my IT attachment activities and
            accomplishments.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card text-muted-foreground border border-border hover:bg-secondary hover:text-foreground"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Auto-playing Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <Swiper
            modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{ clickable: true }}
            className="w-full py-8"
          >
            {filteredImages.map((image) => (
              <SwiperSlide
                key={image.id}
                className="!w-72 sm:!w-80 lg:!w-96"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden border border-border shadow-xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Expand icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-3 bg-card/90 backdrop-blur-sm rounded-full border border-border">
                        <FiMaximize2 className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-border">
                        <span className="text-xs text-primary font-medium">
                          {image.category}
                        </span>
                        <h4 className="text-sm font-semibold text-foreground">
                          {image.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="swiper-button-prev-custom p-3 bg-card rounded-full border border-border shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <FiChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="swiper-button-next-custom p-3 bg-card rounded-full border border-border shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <FiChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="relative break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div
                  className={`relative rounded-xl overflow-hidden border border-border shadow-lg ${
                    index % 3 === 0
                      ? "h-64"
                      : index % 3 === 1
                      ? "h-80"
                      : "h-56"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-card/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <FiMaximize2 className="w-8 h-8 text-primary mb-2" />
                    <span className="text-xs text-primary font-medium">
                      {image.category}
                    </span>
                    <h4 className="text-sm font-semibold text-foreground">
                      {image.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <div className="mt-4 text-center">
                <span className="text-sm text-primary font-medium">
                  {lightboxImage.category}
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  {lightboxImage.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lightboxIndex + 1} / {filteredImages.length}
                </p>
              </div>

              {/* Navigation */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-card rounded-full border border-border shadow-lg"
              >
                <FiChevronLeft className="w-6 h-6 text-foreground" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-card rounded-full border border-border shadow-lg"
              >
                <FiChevronRight className="w-6 h-6 text-foreground" />
              </motion.button>

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeLightbox}
                className="absolute -top-12 right-0 p-2 bg-card rounded-full border border-border shadow-lg"
              >
                <FiX className="w-6 h-6 text-foreground" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
