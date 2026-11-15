function Image({ src, width, alt }) {
  return (
    <img
      src={src}
      style={{ width: width }}
      alt={alt}
      className="character-image"
    />
  );
}

export default Image;
