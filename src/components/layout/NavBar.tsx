import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  LogIn,
  Shield,
  Search,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { entidad, moduleDetail, navigationLinks, services } from "@/lib/data";
import appConfig from "@/lib/config";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState("/");
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Verificar el estado inicial
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'shadow-lg border-b border-border bg-card backdrop-blur-lg' : ''
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between py-4">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/images/logo.png"
                  alt={appConfig.entity.name}
                  className="w-12 h-12 rounded-full shadow-lg object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1
                  className={`font-bold text-lg transition-colors duration-300`}
                >
                  {moduleDetail.name}
                </h1>
                <p
                  className={`text-xs transition-colors duration-300 text-muted-foreground`}
                >
                  {entidad.razonSocial}
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div
                className={`flex items-center rounded-full p-1 transition-all duration-300 bg-card border border-border`}
              >
                {navigationLinks.map((route) => (
                  <Link
                    to={route.href}
                    key={route.href}
                    onClick={() => setActiveRoute(route.href)}
                    className={`group relative flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full hover:cursor-pointer ${
                      activeRoute === route.href
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-muted-foreground hover:text-primary hover:bg-accent"
                    }`}
                  >
                    {route.icon}
                    <span>{route.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Quick Actions Dropdown */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setShowQuickActions(!showQuickActions)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl bg-accent text-secondary-foreground hover:cursor-pointer`}
                >
                  <Search className="h-4 w-4" />
                  <span>Acciones</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      showQuickActions ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {showQuickActions && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-card rounded-2xl shadow-2xl border overflow-hidden animate-fadeInDown">
                    <div className="p-2">
                      {services.map((action) => (
                        <a
                          key={action.label}
                          href={action.href}
                          target="_blank"
                          className="flex items-center gap-3 px-4 py-3 text-sm text-secondary-foreground hover:bg-secondary rounded-xl transition-colors duration-200"
                        >
                          <div className="p-2 bg-secondary rounded-lg">
                            {action.icon}
                          </div>
                          <span>{action.label}</span>
                          <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Login Button */}
              <a
                href={"/sgd/login.do"}
                target="_blank"
                className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-xl transform hover:scale-105 bg-primary text-primary-foreground shadow-lg hover:shadow-xl`}
              >
                <LogIn className="h-4 w-4" />
                <span>Ingresar</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-3 transition-all duration-300 rounded-xl bg-secondary text-secondary-foreground hover:cursor-pointer`}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-card shadow-2xl animate-slideInRight">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/logo.png"
                    alt={appConfig.entity.name}
                    className="w-10 h-10 rounded-full object-contain"
                  />
                  <div>
                    <h2 className="font-bold">SGD</h2>
                    <p className="text-xs text-secondary-foreground">
                      {appConfig.entity.name}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2 mb-8">
                {navigationLinks.map((route) => (
                  <Link
                    to={route.href}
                    key={route.href}
                    onClick={() => {
                      setActiveRoute(route.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-4 py-4 text-left transition-all duration-300 rounded-2xl ${
                      activeRoute === route.href
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "hover:bg-secondary"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl ${
                        activeRoute === route.href
                          ? "bg-muted/20"
                          : "bg-secondary"
                      }`}
                    >
                      {route.icon}
                    </div>
                    <div>
                      <div className="font-medium">{route.label}</div>
                      <div
                        className={`text-xs ${
                          activeRoute === route.href
                            ? "text-primary-foreground/90"
                            : "text-muted-foreground"
                        }`}
                      >
                        {route.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="space-y-2 mb-8">
                <h3 className="text-sm font-semibold mb-3">Acciones Rápidas</h3>
                {services.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target="_blank"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-secondary-foreground hover:bg-secondary rounded-xl transition-colors duration-200"
                  >
                    <div className="p-2 bg-secondary rounded-lg">
                      {action.icon}
                    </div>
                    <span>{action.label}</span>
                    <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                  </a>
                ))}
              </div>

              {/* Login Section */}
              <div className="space-y-3">
                <Link to={'/sgd/login.do'} className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <LogIn className="h-5 w-5" />
                  <span>Ingresar al Sistema</span>
                </Link>

                <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                  <Shield className="h-3 w-3" />
                  <span>Conexión segura SSL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Click outside handler */}
      {showQuickActions && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setShowQuickActions(false)}
        ></div>
      )}

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.3s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </>
  );
}