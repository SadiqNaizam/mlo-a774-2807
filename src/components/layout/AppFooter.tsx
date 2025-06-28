const AppFooter = () => {
  return (
    <footer className="border-t py-4">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default AppFooter;