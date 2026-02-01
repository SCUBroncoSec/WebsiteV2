import React from "react";

type GalleryProps = {
  images: string[];
  altPrefix?: string;
  className?: string;
};

export function Gallery({ images, altPrefix = "Image", className }: GalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div
      className={className}
      style={{
        display: "grid", 
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: 12,
        alignItems: "stretch",
        placeItems: "center",
      }}
    >
      {images.map((src, i) => (
        <div key={i} style={{ overflow: "hidden", borderRadius: 8 }}>
          <img
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      ))}
    </div>
  );
}

// Usage example:
// <Gallery images={["/img/a.jpg","/img/b.jpg","/img/c.jpg"]} />
