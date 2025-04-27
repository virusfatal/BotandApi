#!/bin/bash

# Cores (corrigindo a declara��o)
NOCOLOR='\033[0m'
CYAN='\033[1;36m'
PINK='\033[1;38;5;213m'

while : 
do
clear
echo "${PINK}
   ***                     
  ** **                    
 **   **                   
 **   **         ****      
 **   **       **   ****   
 **  **       *   **   **  
  **  *      *  **  ***  **
   **  *    *  **     **  *
    ** **  ** **        ** 
    **   **  **            
   *           *           
  *             *          
 *    0     0    *         
 *   /   @   \   *         
 *   \__/ \__/   *         
   *     W     *           
     **     **             
       *****              
${NOCOLOR}"
echo "${CYAN} LynBack iniciando... Aguarde ${NOCOLOR}"
node index.js
sleep 1
done