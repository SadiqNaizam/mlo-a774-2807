import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eraser, CheckCircle } from 'lucide-react';

interface SignaturePadProps {
  onConfirm: (signature: string) => void;
}

const SignaturePad: React.FC<SignaturePadProps> = ({ onConfirm }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    console.log('SignaturePad loaded');
    const canvas = canvasRef.current;
    if (canvas) {
      // Adjust for device pixel ratio for sharper drawing
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(ratio, ratio);
        // Use a light stroke color for dark theme
        const strokeColor = getComputedStyle(document.documentElement).getPropertyValue('--foreground');
        ctx.strokeStyle = `hsl(${strokeColor.trim()})`;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        setContext(ctx);
      }
    }
  }, []);

  const getCoordinates = (event: React.MouseEvent | React.TouchEvent): { x: number; y: number } => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    
    if (event.nativeEvent instanceof MouseEvent) {
      return { x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY };
    } 
    if (event.nativeEvent instanceof TouchEvent) {
      return { 
        x: event.nativeEvent.touches[0].clientX - rect.left, 
        y: event.nativeEvent.touches[0].clientY - rect.top 
      };
    }
    return { x: 0, y: 0 };
  };

  const startDrawing = (event: React.MouseEvent | React.TouchEvent) => {
    if (!context) return;
    const { x, y } = getCoordinates(event);
    context.beginPath();
    context.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !context) return;
    const { x, y } = getCoordinates(event);
    context.lineTo(x, y);
    context.stroke();
  };

  const stopDrawing = () => {
    if (!context) return;
    context.closePath();
    setIsDrawing(false);
  };

  const handleClear = () => {
    if (context && canvasRef.current) {
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      console.log('Signature canvas cleared.');
    }
  };

  const handleConfirm = () => {
    if (canvasRef.current) {
      const signatureDataUrl = canvasRef.current.toDataURL('image/png');
      onConfirm(signatureDataUrl);
      console.log('Signature confirmed. Data URL generated.');
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Sign Here</CardTitle>
        <CardDescription>Use your mouse or touchscreen to draw your signature.</CardDescription>
      </CardHeader>
      <CardContent>
        <canvas
          ref={canvasRef}
          className="w-full h-48 border border-dashed rounded-md bg-muted cursor-crosshair touch-none"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" onClick={handleClear}>
          <Eraser className="mr-2 h-4 w-4" />
          Clear
        </Button>
        <Button onClick={handleConfirm}>
          <CheckCircle className="mr-2 h-4 w-4" />
          Confirm Signature
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SignaturePad;